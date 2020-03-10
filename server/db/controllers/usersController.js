const User = require("../../models/usersModel");

module.exports.create = function(req, res) {
  const userObj = req.body;

  User.addUser(userObj)
    .then(() => {
      res.sendStatus(201);
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
