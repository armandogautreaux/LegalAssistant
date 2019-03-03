const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const LocalStrategy = require('./localStrategy');
const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const salt = bcrypt.genSaltSync(10);

passport.serializeUser((user, done) => {
  console.log('*** serializeUser called, user: ');
  console.log(user); // the whole raw user object!
  console.log('---------');
  done(null, { _id: user._id });
});

// user object attaches to the request as req.user

passport.deserializeUser((id, done) => {
  console.log('DeserializeUser called');
  User.findOne({ id: _id }, (err, user) => {
    console.log('*** Deserialize user, user:');
    console.log(user);
    console.log('--------------');
    done(null, user);
  });
});

// passport.use(
//   'local-login',
//   new LocalStrategy(
//     {
//       usernameField: 'email'
//       // passwordField: 'password',
//       // passReqToCallback: true
//     },
//     function(email, password, done) {
//       process.nextTick(function() {
//         User.findOne({ email: email }, function(err, user) {
//           // console.log(user);
//           if (err) throw err;
//           if (!user) {
//             return done(null, false, { message: 'No user found' });
//           }
//           if (!bcrypt.compareSync(password, user.password)) {
//             return done(null, false, { message: 'Invalid password' });
//           }

//           // else {
//           //   req.user = user;
//           //   // console.log(req.user);
//           //   // console.log(user);
//           //   return done(null, user);
//           // }
//           return done(null, user);
//         });
//       });
//     }
//   )
// );
//  Use Strategies
passport.use(LocalStrategy);

module.exports = passport;
