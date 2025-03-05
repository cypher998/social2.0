const {userRouter} = require("../routes/user") 
const {profileRouter} = require("../routes/profile") 
const {postRouter} = require("../routes/post") 

const {main}=require("./db")
const express=require("express")
const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())

app.use("/api/user" , userRouter )
app.use("/api/profile" , profileRouter )
app.use("/api/post" , postRouter )


app.listen(3000,()=>{

    main();
    console.log("server is live")})