const { sendAccepted } = require('../../middleware/index');

const signOut = (req, res) => {
  req.logOut();
  sendAccepted(res)();
};

module.exports = signOut;
