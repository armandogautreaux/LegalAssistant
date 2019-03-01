const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

passport.serializeUser(function(user, done) {
  console.log('*** serializeUser called, user: ');
  console.log(user); // the whole raw user object!
  console.log('---------');
  done(null, { _id: user._id });
});

passport.deserializeUser(function(id, done) {
  User.findById({ _id: id }, 'email', function(err, user) {
    console.log('*** Deserialize user, user:');
    console.log(user);
    console.log('--------------');
    done(err, user);
  });
});

passport.use(
  'local-signup',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    function(req, email, password, done) {
      const { name } = req.body;
      process.nextTick(function() {
        User.findOne({ email: email }, function(err, user) {
          if (err) return done(err);
          if (user) {
            return done(null, false, { message: 'Email already taken' });
          } else {
            const hash = bcrypt.hashSync(password, salt);
            const newUser = new User({
              name: name,
              email: email,
              password: hash
            });
            newUser.save(function(err) {
              if (err) throw err;
              return done(null, newUser);
            });
          }
        });
      });
    }
  )
);

passport.use(
  'local-login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    function(req, email, password, done) {
      process.nextTick(function() {
        User.findOne({ email: email }, function(err, user) {
          // console.log(user);
          if (err) throw err;
          if (!user) {
            return done(null, false, { message: 'No user found' });
          }
          if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false, { message: 'Invalid password' });
          } else {
            req.user = user;
            // console.log(req.user);
            // console.log(user);
            return done(null, user);
          }
        });
      });
    }
  )
);

module.exports = passport;
