const User = require('../models/User');
const validateRegisterInput = require('../validation/register');
const bcrypt = require('bcryptjs');
// const passport = require('passport');

// const passport = require('../passport');
module.exports = {
  create: (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body.user);

    // Check validation
    if (!isValid) {
      console.log(errors);
      return res.status(400).json(errors);
    }

    const { name, email, password } = req.body.user;
    console.log(req.body.user);

    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
              throw err;
            }
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
  // authenticate: (req, res, next) => {
  //   next();
  //   passport.authenticate('local', {
  //     successRedirect: '/dashboard',
  //     failureRedirect: '/users/login'
  //   }),
  //     (req, res, next) => {
  //       var userInfo = {
  //         username: req.body
  //       };
  //       res.send(userInfo);
  //     };
  // },

  // authenticate: (function(req, res, next) {
  //   console.log(req.body);
  //   next();
  // },
  // passport.authenticate('local'),
  // (req, res) => {
  //   var userInfo = { email: req.body.formValues.email };
  //   res.send(userInfo);
  // }),
  // authenticate: function(req, res, next) {
  //   passport.authenticate('local', {
  //     successRedirect: '/dashboard',
  //     failureRedirect: '/users/login'
  //   })(req, res, next);
  //   let userInfo = {
  //     email: req.body.formValues.email
  //   };
  //   res.send(userInfo);
  // },
  // authenticated: function(req, res) {
  //   res.json({ user: req.user });
  // },
  // endSession: function(req, res) {
  //   req.logout();
  //   res.redirect('/users/login');
  // }
};
