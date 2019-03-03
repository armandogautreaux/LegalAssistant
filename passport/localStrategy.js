const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const strategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, cb) {
    //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT

    return User.findOne({ email: email })
      .then(user => {
        if (!user) {
          return cb(null, false, { message: 'Incorrect email or password.' });
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return cb(null, false, { message: 'Invalid password' });
        } else {
          // req.user = user;
          // console.log(req.user);
          // console.log(user);
          req.user = user;
          return cb(null, user);
        }
      })
      .catch(err => cb(err));
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
  }
);

module.exports = strategy;
