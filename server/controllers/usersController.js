const User = require("../models/usersModel.js");

module.exports.create = function(req, res) {
  User.addUser(req.body)
    .then(() => {
      res.send(res.body);
    })
    .catch(err => {
      console.error(`An error occured while creating a user: ${err}`);
      res.sendStatus(500);
    });
};

module.exports.retrieve = function(req, res) {
  User.getUser()
    .then(data => {
      // userData will be JSON of the form
      // {
      //   id: 1,
      //   name: 'Coffee Bear',
      //   income: 1780000,
      //   familySize: 3,
      //   createdAt: 2020-03-10T20:51:48.000Z,
      //   updatedAt: 2020-03-10T20:51:48.000Z
      // }

      res.send(data);
    })
    .catch(err => {
      console.error(`An error occured while creating a user: ${err}`);
      res.sendStatus(500);
    });
};

module.exports.update = function(req, res) {
  User.update(req.body)
    .then(() => res.sendStatus(204))
    .catch(err => {
      console.error(`An error occurred while updating the user: ${err}`);
      res.sendStatus(500);
    });
};

module.exports.delete = function(req, res) {
  User.delete(req.body)
    .then(() => res.sendStatus(204))
    .catch(err => {
      console.error(`An error occurred while deleting the user: ${err}`);
      res.sendStatus(500);
    });
};
