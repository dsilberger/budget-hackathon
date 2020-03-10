const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('budget', 'dsilberger', '', {
  // <- UPDATE USERNAME TO CONFIG ENTRY
  host: 'localhost', // <- UPDATE TO CONFIG ENTRIES
  dialect: 'mysql'
});

// User model

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  income: {
    type: DataTypes.INTEGER // Store income in pennies, not dollars
  },
  familySize: {
    type: DataTypes.INTEGER
  }
});

User.sync({ force: false }, err => {
  if (err) {
    console.error(`An error occurred updating the Users table. Error: ${err}`);
  } else {
    console.log(`Users synced to model.`);
  }
});

// User methods

module.exports.addUser = function(userObj) {
  // userObj should be an object of the form
  // { name: "some string", income: "some integer", familySize: "some integer" }
  // id will be supplied by db.

  let newUser = User.build(userObj);

  newUser
    .save()
    .then((err, data) => {
      console.log(`New user created with ID ${data.id}`);
      return;
    })
    .catch(err => {
      console.error(`Failed to create new user in database. Error: ${err}`);
      return;
    });
};

module.exports.getUser = function() {
  User.findAll()
    .then((err, data) => {
      return data;
    })
    .catch(err => {
      console.error(`Failed to get user profile. Error: ${err}`);
      return;
    });
};
