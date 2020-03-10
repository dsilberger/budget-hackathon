const { Sequelize, DataTypes } = require("sequelize");
const { DB_USER, DB_PASSWORD } = require("../db/config");

const sequelize = new Sequelize("budget", DB_USER, DB_PASSWORD, {
  host: "localhost", // <- CHANGE FOR DEPLOYMENT
  dialect: "mysql"
});

// User model

const User = sequelize.define("User", {
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

  return newUser.save();
};

module.exports.getUser = function() {
  return User.findAll();
};
