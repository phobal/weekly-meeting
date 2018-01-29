const mongoose = require('mongoose');
const dbUrl = require('../config/config').db;

exports.connection = function () {
  const options = {
    server: {
      auto_reconnect: true,
      poolSize: 10
    }
  }
  mongoose.connect(dbUrl);
  var db = mongoose.connection;
  db.on('error', function () { console.error('connection error') });
  db.once('open', function () {
    console.log('connection success!');
  });
}

exports.disconnection = function (callback) {
  mongoose.disconnect(callback);
}