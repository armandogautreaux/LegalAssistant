const router = require('express').Router();
const filesRoutes = require('./files');

//User Routes
router.use('/files', filesRoutes);

module.exports = router;
