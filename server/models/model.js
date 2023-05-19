const mongoose = require("mongoose");

const { Schema } = mongoose;

const modelSchema = new Schema({
  propertyOne: String,
  propertyTwo: String,
  propertyThree: Boolean,
  propertyFour: String,
});

const Model = mongoose.model("ModelName", modelSchema);

module.exports = Model;
