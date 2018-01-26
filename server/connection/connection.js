const mongoose = require('mongoose');
const dbUrl = require('../config/config').db;

exports.connection = function() {
  mongoose.connect(dbUrl);
  var db = mongoose.connection;
  db.on('error', function() { console.error('connection error') });
  db.once('open', function() {
    console.log('connection success!');
  });
}

exports.disconnection = function(callback) {
  mongoose.disconnect(callback);
}