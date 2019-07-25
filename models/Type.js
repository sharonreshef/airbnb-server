const mongoose = require('mongoose');

const TypeSchema = mongoose.Schema({
  name: { type: String, required: true }
});

const Type = mongoose.model('type', TypeSchema);
module.exports = { Type };
