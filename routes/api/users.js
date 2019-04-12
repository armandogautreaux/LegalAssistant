const router = require('express').Router();
const passport = require('../../passport');
const usersController = require('../../controllers/usersController');

router.route('/register').post(usersController.register);
router.route('/login').post(usersController.login);

router.get('/user');

router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { user } = req;
    res.status(200).send({ user });
  }
);

//Make this route match with passport jwt and cookie from react
router.get(
  '/logout',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    if (req.user) {
      req.logout();
      res
        .status(200)
        .clearCookie('jwt', { path: '/' })
        .json({ status: 'Success' });
      res.end();
    } else {
      res.send({ msg: 'no user to log out' });
    }
  }
);

module.exports = router;
