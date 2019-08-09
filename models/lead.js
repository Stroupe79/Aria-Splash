const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const venueLeads = new Schema({
  name: String,
  email: String,
  comment: String,
},
{typeKey: '$type'}
);

const Lead = mongoose.model("leads", venueLeads);

module.exports = Lead;