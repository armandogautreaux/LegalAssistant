const router = require('express').Router();
// const { ensureAuthenticated } = require('../../config/auth');
const passport = require('../../passport');
// const usersController = require('../../controllers/usersController');
router.post('/register', passport.authenticate('local-signup'), (req, res) => {
  res.status(200).send('Registered');
});

// router.route('/login').post(usersController.authenticate);

// router.post('/login', passport.authenticate('local-login'), (req, res) => {
//   console.log(req.user);
//   console.log(req.session);
//   console.log(req.sessionID);
//   res.send({ _id: req.user._id });
// });

router.post(
  '/login',
  function(req, res, next) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body);
    next();
  },
  passport.authenticate('local-login'),
  (req, res) => {
    console.log('logged in', req.user);
    res.send({ _id: req.user._id });
  }
);

// router.get('/', (req, res, next) => {
//   console.log('===== user!!======');
//   // console.log(req.user);
//   // if (req.user) {
//   //   res.json({ user: req.user });
//   // } else {
//   //   res.json({ user: null });
//   // }
// });

router.get('/', loggedIn, function(req, res, next) {
  // req.user - will exist
  // load user orders and render them
  console.log('===== user!!======');
  console.log(req.user);
  res.send({ user: req.user });
});

function loggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.status(401).send('No cookie received');
  }
}

router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: 'logging out' });
    res.end();
  } else {
    res.send({ msg: 'no user to log out' });
  }
});

// //Logout Route
// router.get('/logout', (req, res, next) => {
//   req.logout();
//   res.end();
// });

module.exports = router;
