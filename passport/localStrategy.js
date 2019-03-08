const LocalStrategy = require('passport-local').Strategy;
// const passportJWT = require('passport-jwt');
// const JWTStrategy = passportJWT.Strategy;
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// passport.use(new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
// }, async (email, password, done) => {
//   try {
//     const user = await User.findOne({email: email}).exec();
//     const passwordsMatch = await bcrypt.compareSync(password, user.password);

//     if (passwordsMatch) {
//       return done(null, user);
//     } else {
//       return done('Incorrect Username / Password');
//     }
//   } catch (error) {
//     done(error);
//   }
// }));

// const strategy = new LocalStrategy(
//   {
//     usernameField: 'email',
//     passwordField: 'password'
//   },
//   async (email, password, done) => {
//     try {
//       const user = await User.findOne({ email: email }).exec();
//       const passwordsMatch = await bcrypt.compareSync(password, user.password);

//       if (passwordsMatch) {
//         return done(null, user);
//       } else {
//         return done('Incorrect Username / Password');
//       }
//     } catch (error) {
//       done(error);
//     }
//   }
// );

const strategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done) {
    console.log(req.body);
    // const password = req.body.password;
    //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT

    User.findOne({ email: email }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: 'Invalid password' });
      }
      return done(null, user);
    });
  }
);

// User.findOne({ email: email })
//   .then(user => {
//     if (!user) {
//       return cb(null, false, { message: 'Incorrect email or password.' });
//     }
//     if (!bcrypt.compareSync(password, user.password)) {
//       return cb(null, false, { message: 'Invalid password' });
//     } else {
//       // req.user = user;
//       // console.log(req.user);
//       // console.log(user);
//       req.logIn(user, function() {
//         // Manually save session before redirect. See bug https://github.com/expressjs/session/pull/69
//         req.session.save(function() {
//           req.user = user;
//           return cb(null, user);
//         });
//       });
//     }
//   })
//   .catch(err => cb(err));
// const strategy = new LocalStrategy(
//   {
//     usernameField: 'email'
//     // passwordField: 'password',
//     // passReqToCallback: true
//   },
//   function(email, password, done) {
//     process.nextTick(function() {
//       User.findOne({ email: email }, function(err, user) {
//         // console.log(user);
//         if (err) throw err;
//         if (!user) {
//           return done(null, false, { message: 'No user found' });
//         }
//         if (!bcrypt.compareSync(password, user.password)) {
//           return done(null, false, { message: 'Invalid password' });
//         }

//         // else {
//         //   req.user = user;
//         //   // console.log(req.user);
//         //   // console.log(user);
//         //   return done(null, user);
//         // }
//         return done(null, user);
//       });
//     });
//   }
// );
//   }
// );

module.exports = strategy;
