const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const { ensureAuthenticated } = require('../../config/auth');
const passport = require('../../passport');

//Create User
router.route('/register').post(usersController.create);

// //Login;
// router.route('/login').post(usersController.authenticate);

router.post(
  '/login',
  function(req, res, next) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body);
    next();
  },
  passport.authenticate('local'),

  (req, res) => {
    // console.log(req.session);
    console.log('logged in', req.user);
    var userInfo = {
      username: req.user.email
    };
    res.send(userInfo);
  }
);
// router.post(
//   '/login',
//   function(req, res, next) {
//     // console.log(req.body);
//     next();
//   },
//   passport.authenticate('local'),
//   (req, res) => {
//     console.log(req);
//   }
// );

//   passport.authenticate('local', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/users/login'
//     // failureFlash: true
//   })(req, res, next);
// });
// Logout
// router.route('/logout').get(usersController.endSession);
router.post('/logout', (req, res) => {
  req.logout();
  console.log(req.session);
  console.log('new -req', req.body);
  // console.log(req.sessionID);
  // if (req.sessionID) {
  //   req.logout();
  //   res.send({ msg: 'logging out' });
  //   console.log(req.session);
  // } else {
  //   res.send({ msg: 'no user to log out' });
  // }
});
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.json({ user: req.user });
});
module.exports = router;
