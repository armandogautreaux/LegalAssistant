const User = require('../models/User');
const validateRegisterInput = require('../validation/register');
const bcrypt = require('bcryptjs');
// const passport = require('passport');

module.exports = {
  create: (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body.formValues);

    // Check validation
    if (!isValid) {
      console.log(errors);
      return res.status(400).json(errors);
    }

    const { name, email, password } = req.body.formValues;

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
  },
  // authenticate: function( req , res, next) {
  //   passport.authenticate('local', {
  //     successRedirect: '/dashboard',
  //     failureRedirect: '/users/login'
  //     // failureFlash: true
  //   })( req , res, next);
  // },
  // authenticated: function(req, res) {
  //   res.json({ user: req.user });
  // },
  endSession: function(req, res) {
    req.logout();
    res.redirect('/users/login');
  }
};
