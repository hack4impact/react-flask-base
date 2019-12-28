const mongoose = require('mongoose');
const models = require('../models/models.js');

exports.getAllUsers = (req, res) => {
    models.User.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
};

exports.updateUser = (req, res) => {
    models.User.findOneAndUpdate({
        _id: req.params.userId
    }, req.body,
        (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
};

exports.deleteUser = (req, res) => {
    models.User.remove({
        _id: req.params.userId
    }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({
            message: `User ${req.params.userId} successfully deleted.`
        });
    });
};
