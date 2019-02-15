//DATABASE ROUTING
const express = require('express');
const router = express.Router();
const db = require('../models/');

router.get('/api/user', function(req, res) {});

router.post('/api/user', function(req, res) {
  db.User.create(req.body, function(error, response) {
    if (error) {
      return res.json(error);
    }
    return res.json(response);
  });
});

router.post('/login', function(req, res) {
  db.User.findOne({ username: req.body.username }, function(error, response) {
    if (error) {
      return res.json(error);
    }
    response.comparePassword(req.body.password, function(error, user) {
      if (error) {
        res.send(error);
      }
      res.json(user);
    });
  });
});

router.put('/api/user/:id', function(req, res) {
  res.send('Put Users');
});

router.delete('/api/user/:id', function(req, res) {
  res.send('Delete Users');
});

module.exports = router;
