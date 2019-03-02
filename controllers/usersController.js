const User = require('../models/User');
const passport = require('../passport');
module.exports = {
  create: (req, res) => {
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

  // authenticate: function(req, res, next) {
  //   passport.authenticate('local-login', function(err, user, info) {
  //     if (err || !user) return res.status(401).send(error);
  //     req.logIn(user, function(err) {
  //       if (err) return err;
  //       // console.log('req.login called!');
  //       // console.log('INFO, ', info);
  //       return res.status(201).json({
  //         user: user,
  //         session: req.session,
  //         'req.user': req.user
  //       });
  //       // if (err) return res.status(401).send(error);
  //       // return res.send({ _id: req.user._id });
  //     });
  //   })(req, res, next);
  // }
};

// req.login(user, function(err) {
//   if (err) return err;
//   console.log("req.login called!");
//   console.log("INFO, ", info);
//   return res.status(201).json({
//       user: user,
//       session: req.session,
//       "req.user": req.user
//   });
// });
