// Require "connection.js"
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM burgers;";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    selectDevoured: function(tableInput, cb) {
      var queryString = "SELECT * FROM burgers WHERE devoured = true;";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    selectNotDevoured: function(tableInput, cb) {
      var queryString = "SELECT * FROM burgers WHERE devoured = false;";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(name, cb) {
      var queryString = `INSERT INTO BURGERS (burger_name) VALUES ("${name}")`;
  
    //   queryString += " (";
  
      console.log(queryString);
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}

    // I would set up these methods in the ORM file to properly use CRUD operations in the database. 
    // I'm a little behind and not sure of the dynamics with setting the variables how to get these to behave properly.
    updateOne: function() {
      console.log("INSIDE");
      var queryString = `UPDATE BURGERS set devoured = 1 where id = 1`;
  
      // queryString += " SET ";
      // queryString += objToSql(objColVals);
      // queryString += " WHERE ";
      // queryString += condition;
  
      // console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
  };

  module.exports = orm;