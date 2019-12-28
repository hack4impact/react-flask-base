const mongoose = require('mongoose');
const models = require('../models/models.js');

exports.logout = (req, res) => {

};

exports.signUp = (req, res) => {
  models.User.find({ email: req.body.email }, (err, user) => {
      if (err) {
          res.send(err);
      }
      else if (user) {
          res.status(200).send(user);
      }
      else {
          models.User.create({ email: req.body.email });
      }
  });
};
