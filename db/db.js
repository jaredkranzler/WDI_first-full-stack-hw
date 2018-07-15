const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/character')

mongoose.connection.on('connected', () => {
  console.log('mongoos is connected')
});

mongoose.connection.on('error', (err) => {
  console.log(err, ' mongoose failed to connect')
});


mongoose.connection.on('disconnected', () => {
  console.log('mongoose is disconnected')
});

console.log('mongoose connect code got run');

