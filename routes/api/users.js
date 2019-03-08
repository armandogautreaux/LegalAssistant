const router = require('express').Router();
const passport = require('../../passport');
const usersController = require('../../controllers/usersController');
// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
// dotenv.config();

// const secret = process.env.SECRET_OR_KEY;

router.route('/register').post(usersController.register);
router.route('/login').post(usersController.login);
// router.route('/profile').get(usersController.authenticate);

// router.post(
//   '/login',
//   function(req, res, next) {
//     // Populate username and password before passing it on to Passport.
//     req.query.email = req.body.data.email;
//     req.query.password = req.body.data.password;
//     next();
//   },
//   function(req, res, next) {
//     passport.authenticate('local', { session: false }, function(
//       error,
//       user,
//       info
//     ) {
//       if (error || !user) {
//         res.status(400).json({ error });
//       }
//       const payload = {
//         username: user._id
//         // expires: Date.now() + parseInt(process.env.JWT_EXPIRATION_MS)
//       };
//       // console.log(payload);

//       /** assigns payload to req.user */
//       req.login(payload, { session: false }, error => {
//         // console.log(payload);
//         if (error) {
//           res.status(400).send({ error });
//         }
//         /** generate a signed json web token and return it in the response */
//         //Sign Token
//         jwt.sign(
//           payload,
//           process.env.SECRET_OR_KEY,
//           { expiresIn: 7200 },
//           (err, token) => {
//             if (err) throw err;
//             res.json({
//               success: true,
//               token: 'Bearer ' + token
//             });
//           }
//         );

//         const token = jwt.sign(payload, secret, { expiresIn: 7200 });

//         /** assign our jwt to the cookie */
//         res.cookie('jwt', token, { httpOnly: true }).status(200);

//         // res.json({
//         //   _id: payload.username,
//         //   success: true,
//         //   token: 'Bearer ' + token
//         // });
//       });
//     })(req, res, next);
//   }
// );

router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    console.log(req.headers);
    const { user } = req;
    console.log(user);

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
