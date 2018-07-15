const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {type: String, required: true},
  patronus: String,
  bloodStatus: String,
  human: Boolean
});

module.exports = mongoose.model('Character', characterSchema);