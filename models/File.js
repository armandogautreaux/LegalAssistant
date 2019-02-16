const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filesSchema = new Schema({
  fileNumber: { type: Number, required: true },
  Client: { type: String, required: true },
  defendant: { type: String, required: true },
  nextHearing: { type: Date, required: true },
  caseStatus: { type: String, require: true },
  Summary: { type: String, required: true }
});

const File = mongoose.model('File', filesSchema);

module.exports = File;
