const db = require('../models');

module.exports = {
  findAll: function(req, res) {
    db.File.find(req.query)
      .sort({ sate: -1 })
      .then(function(dbModel) {
        res.json(dbModel);
      })
      .catch(function(err) {
        res.status(422).json(err);
      });
  },
  findById: function(req, res) {
    db.File.findById(req.params.id)
      .then(function(dbModel) {
        res.json(dbModel);
      })
      .catch(function(err) {
        res.status(422).json(err);
      });
  },
  findByTwoQueries: function(req, res) {
    console.log(req);
    db.File.find({
      client: req.query.client,
      fileNumber: req.query.fileNumber
    });
  },
  create: function(req, res) {
    db.File.create(req.body)
      .then(function(dbModel) {
        res.json(dbModel);
      })
      .catch(function(err) {
        res.status(422).json(err);
      });
  },
  update: function(req, res) {
    db.File.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(function(dbModel) {
        res.json(dbModel);
      })
      .catch(function(err) {
        res.status(422).json(err);
      });
  },
  remove: function(req, res) {
    db.File.findById({ _id: req.params.id })
      .then(function(dbModel) {
        dbModel.remove();
      })
      .then(function(dbModel) {
        res.json(dbModel);
      })
      .catch(function(err) {
        res.status(422).json(err);
      });
  }
};
