const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { User } = require('../models/user/index');
const { localAuth } = require('./local');

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, localAuth(User)));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = { passport };
