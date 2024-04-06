const express=require("express");
const connection=require("./db")
const userRouter=require("./routes/user.router")
const cors=require("cors");
require("dotenv").config(); 
const app=express();

app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.send("Welcome to the Node.JS")
});

app.use("/", userRouter)

app.listen(process.env.port, async()=>{
    try {
        await connection;
        console.log("Connect to DB");
    } catch (error) {
        console.log(error);
    }
    console.log("Server is running on port 7500");
})