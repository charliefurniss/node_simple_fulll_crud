var mongoose         = require('mongoose');

var dashSchema       = new mongoose.Schema({
  visitors: Number,
  officeTemp: Number,
  plants: String,
  weather: String,
  fridgeDrinks: Number,
  teaMaker: String
});

var Dash = mongoose.model('Dash', dashSchema);

module.exports = Dash;