var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const fridgeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Fridge', fridgeSchema);
