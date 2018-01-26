const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const router = require('./routes/index');
const connection = require('./connection/connection');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

connection.connection();

app.on('close', function() {
  connection.disconnection(function() {
    console.log('mongodb closed!');
  });
})
router(app);

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err.message })
  });
} else {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err })
  });
}

module.exports = app;