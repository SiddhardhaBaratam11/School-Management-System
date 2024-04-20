const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
  picture: String,
  name: String,
  fees: Number,
  details: String,
});

module.exports = mongoose.model('School', SchoolSchema);
