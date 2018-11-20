const express = require('express');

const { errorHandler } = require('../middleware/index');
const { User } = require('../models/user/index');
const { Question } = require('../models/question/index');
const { Answer } = require('../models/answers/index');
const { Vote } = require('../models/vote/index');

const auth = require('../controllers/auth/index');
const users = require('../controllers/users/index');
const questions = require('../controllers/questions/index');

const models = { User, Question, Answer, Vote };

const routersInit = config => {
  const router = express();

  router.use('/auth', auth(models, { config }));
  router.use('/users', users(models, { config }));
  router.use('/questions', questions(models, { config }));

  router.use(errorHandler);
  return router;
};

module.exports = routersInit;
