const router = require('express').Router();
const filesController = require('../../controllers/filesController');

router
  .route('/')
  .get(filesController.findAll)
  .post(filesController.create);

router
  .route('/:id')
  .get(filesController.findById)
  .patch(filesController.update)
  .delete(filesController.remove);

module.exports = router;
