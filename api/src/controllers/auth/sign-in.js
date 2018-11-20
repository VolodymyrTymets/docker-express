const { sendOne } = require('../../middleware/index');

const signIn = (req, res) => {
  const { token, user } = req;
  return sendOne(res, { user, token});
};

module.exports = signIn;
