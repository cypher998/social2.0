
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileModel = new Schema({
  userid:{type:mongoose.Schema.Types.ObjectId , ref:"user"},
  
  username: { type: String, required: true },

  profile: { type: String, default: "" }, //picture

  bio: { type: String, default: "" },
  following: [
    
     { type : mongoose.Schema.Types.ObjectId,
      ref: "user"}
    
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
},{timestamps:true});

const profiledata = mongoose.model("profile", profileModel);

module.exports = {  profiledata };