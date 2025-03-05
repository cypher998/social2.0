const jwt=require("jsonwebtoken")
const jwt_secret="qwerty"
function auth(req , res , next){
    const token=req.headers.token
    if(!token){
        res.status(401).json({error:"token is not provided"})   
    }
    jwt.verify(token , jwt_secret,(err ,decoded)=>{
    if(err){
        return res.status(403).json({message:"invalid token"})
    }
    req.user=decoded
    console.log(req.user)
        next()
 })



}

module.exports={auth}
   