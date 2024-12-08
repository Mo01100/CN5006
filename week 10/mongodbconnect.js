​
Mohamed METWALY
​
const mongoose = require('mongoose');

const MONG_URI = 'mongodb://localhost:27017/lab_Iek6';

mongoose.connect(MONG_URI)
 .then(() => {
   console.log('Successfully connected to MongoDB at ' + MONG_URI);
 })
 .catch((err) => {
   console.log('Error occurred while connecting to MongoDB: ' + err);
 });

const db = mongoose.connection;

db.on('error', function (err) {
 console.log('Error occurred: ' + err);
});

db.on('disconnected', function () {
 console.log('MongoDB connection lost, attempting to reconnect...');
});

module.exports = db;
