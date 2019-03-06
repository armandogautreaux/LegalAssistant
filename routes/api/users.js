const router = require('express').Router();
const passport = require('../../passport');
const usersController = require('../../controllers/usersController');

router.route('/register').post(usersController.register);
router.route('/login').post(usersController.login);
// router.route('/profile').get(usersController.authenticate);

router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { user } = req;
    console.log(req.header);

    res.status(200).send({ user });
  }
);

// router.post('/', passport.authenticate('local-signup'), (req, res) => {
//   res.status(200).send('Registered');
// });
// router.post('/register', async (req, res) => {
//   const { email, password, name } = req.body;

//   // authentication will take approximately 13 seconds
//   // https://pthree.org/wp-content/uploads/2016/06/bcrypt.png
//   const hashCost = 10;

//   try {
//     const passwordHash = await bcrypt.hash(password, hashCost);
//     const userDocument = new UserModel({ username, passwordHash });
//     await userDocument.save();

//     res.status(200).send({ username });
//   } catch (error) {
//     res.status(400).send({
//       error: 'req body should take the form { username, password }'
//     });
//   }
// });

// router.post('/register', (req, res) => {
//   console.log('user signup');

//   const { email, password, name } = req.body;
//   // ADD VALIDATION
//   User.findOne({ email: email }, (err, user) => {
//     if (err) {
//       console.log('User.js post error: ', err);
//     } else if (user) {
//       res.json({
//         error: `Sorry, already a user with the username: ${email}`
//       });
//     } else {
//       const hash = bcrypt.hashSync(password, salt);
//       const newUser = new User({
//         name: name,
//         email: email,
//         password: hash
//       });
//       newUser.save((err, savedUser) => {
//         if (err) return res.json(err);
//         res.json(savedUser);
//       });
//     }
//   });
// });
// router.route('/').post(usersController.signup);

// router.post('/login', passport.authenticate('local-login'), (req, res) => {
//   console.log(req.user);
//   console.log(req.session);
//   console.log(req.sessionID);
//   res.send({ _id: req.user._id });
// });

// router.post(
//   '/login',
//   function(req, res, next) {
//     console.log('routes/user.js, login, req.body: ');
//     console.log(req.body);
//     next();
//   },
//   passport.authenticate('local-login'),
//   (req, res) => {
//     console.log('logged in', req.user);

//     res.send({ _id: req.user._id });
//   }
// );

// router.post('/login', passport.authenticate('local'), function(req, res) {
//   console.log('logged in', req.user);

//   var userInfo = {
//     _id: req.user._id
//   };
//   res.send(userInfo);
// });

// router.post(
//   '/login',
//   function(req, res, next) {
//     console.log('routes/user.js, login, req.body: ');
//     console.log(req.body);
//     next();
//   },
//   passport.authenticate('local'),
//   (req, res) => {
//     console.log('logged in', req.user);
//     var userInfo = {
//       _id: req.user._id
//     };
//     res.send(userInfo);
//   }
// );

// router.get('/', (req, res, next) => {
//   console.log('===== user!!======');
//   // console.log(req.user);
//   // if (req.user) {
//   //   res.json({ user: req.user });
//   // } else {
//   //   res.json({ user: null });
//   // }
// });

// authenticate
// router.get('/profile', function(req, res) {
//   console.log(req.user);
//   res.send({ user: req.user });
// });

// router.get('/', (request, response, next) => {
//   console.log(request.user, request.session);
//   console.log(request.sessionID);
//   console.log(request.isAuthenticated());
//   if (request.user) {
//     response.header('Content-Type', 'application/json');
//     return response.send(request.user);
//   } else {
//     return response.status(401).send('There is no user currently logged in!');
//   }
// });
// router.get('/', (req, res, next) => {
//   console.log('===== user!!======');
//   console.log(req.user);
//   console.log(req.sessionID);
//   // console.log(req.session.passport);

//   // req.headers.cookie = req.user;
//   if (req.user) {
//     console.log(req.user);
//     res.json({ user: req.user });
//   } else {
//     res.json({ user: null });
//   }
// });

// function loggedIn(req, res, next) {
//   if (req.user) {
//     next();
//   } else {
//     res.status(401).send('No cookie received');
//   }
// }

router.get('/logout', (req, res) => {
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
