
const mongoose=require("mongoose")
async function  main (){

  try {await mongoose.connect("mongodb+srv://mridul:ZkqeJgKeo7h5huJa@cluster0.6ahvm.mongodb.net/paps")

    console.log("connected")
  }catch(e){
    console.log(e)
  }
}

module.exports= {main}