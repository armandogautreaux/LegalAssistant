//DATABASE ROUTING
const express = require('express');
const router = express.Router();
const db = require('../models/');

router.get('/api/user', function(req, res) {
  res.send('Get Users');
});

router.post('/api/user', function(req, res) {
  db.User.create(req.body, function(error, response) {
    if (error) {
      return res.json(error);
    }
    return res.json(response);
  });
});

router.put('/api/user/:id', function(req, res) {
  res.send('Put Users');
});

router.delete('/api/user/:id', function(req, res) {
  res.send('Delete Users');
});

module.exports = router;
