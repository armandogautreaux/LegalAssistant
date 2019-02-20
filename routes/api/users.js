const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const { ensureAuthenticated } = require('../../config/auth');
const passport = require('../../passport');

//Create User Route
router.route('/register').post(usersController.create);

//Login Route
router.post(
  '/login',
  function(req, res, next) {
    next();
  },
  passport.authenticate('local'),
  (req, res) => {
    var userInfo = {
      _id: req.user._id
    };
    res.send(userInfo);
  }
);

//Logout Route
router.get('/logout', (req, res, next) => {
  req.logout();
  res.end();
});

// router.get('/dashboard', ensureAuthenticated, (req, res) => {
//   res.json({ user: req.user });
// });
module.exports = router;
