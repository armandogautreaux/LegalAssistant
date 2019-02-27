const router = require('express').Router();
// const { ensureAuthenticated } = require('../../config/auth');
const passport = require('../../passport');

router.post('/register', passport.authenticate('local-signup'), (req, res) => {
  res.status(200).send('Registered');
});

router.post('/login', passport.authenticate('local-login'), (req, res) => {
  res.send({ _id: req.user._id });
});

//Logout Route
router.get('/logout', (req, res, next) => {
  req.logout();
  res.end();
});

module.exports = router;
