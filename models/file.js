const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  downloadCount: {
    type: Number,
    required: true,
    default: 0,
  },
});

const File = mongoose.model('File', fileSchema);
module.exports = File;
