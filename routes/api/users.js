const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const { ensureAuthenticated } = require('../../config/auth');

//Create User
router.route('/register').post(usersController.create);

// Login
router.route('/login').post(usersController.authenticate);

// Logout
router.route('/logout').get(usersController.endSession);

router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.json({ user: req.user });
});
module.exports = router;
