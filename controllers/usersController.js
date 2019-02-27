const User = require('../models/User');

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
  },

  authenticate: function(req, res, next) {
    // call passport authentication passing the "local" strategy name and a callback function
    passport.authenticate('local-login', (error, user, info) => {
      // this will execute in any case, even if a passport strategy will find an error
      // log everything to console
      console.log(error);
      console.log(user);
      console.log(info);

      if (error) {
        res.status(401).send(error);
      } else if (!user) {
        res.status(401).send(info);
      } else {
        next();
      }
      res.status(401).send(info);
    }),
      (req, res) => {
        var userInfo = {
          _id: req.user._id
        };
        res.send(userInfo);
      };
  }
};
