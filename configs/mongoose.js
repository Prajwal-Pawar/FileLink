const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/file_link');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error starting mongodb'));
db.once('open', () => {
  console.log('connected to DB');
});

module.exports = db;
