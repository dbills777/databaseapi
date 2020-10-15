const mongoose = require('mongoose')

const PhoneSchema = new mongoose.Schema({
  name: String,
  cat: String,
  price: Number,
  qty: Number,
  mfg: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manufacture',
  },
});
module.exports = mongoose.model('Phone',PhoneSchema)