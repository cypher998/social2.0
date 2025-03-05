const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const user = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    DateofBirth: { type: Date, required: true },
  },{timestamps:true});

  const userModel = mongoose.model("user", user);
  
  module.exports = { userModel};