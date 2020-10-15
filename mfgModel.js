const mongoose = require('mongoose');

const MfgSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  devices: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Phone"
  }]
});
module.exports = mongoose.model('Manufacture', MfgSchema);
