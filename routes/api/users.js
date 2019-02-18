const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const { ensureAuthenticated } = require('../../config/auth');
const passport = require('passport');

//Create User
router.route('/register').post(usersController.create);

// Login
// router.route('/login').post();

// authenticate: function( req , res, next) {
//   passport.authenticate('local', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/users/login'
//     // failureFlash: true
//   })( req , res, next);
// },
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login'
    // failureFlash: true
  }),
  function(req, res) {
    console.log(req.body.formValues);
    res.send('hey');
  }
);

// Logout
router.route('/logout').get(usersController.endSession);

router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.json({ user: req.user });
});
module.exports = router;
