const express=require("express");
const connection=require("./db")
const app=express();

app.use(express.json());


app.use('/api', require('./routes/userRouter'));


app.listen(3500, async()=>{
    try {
        await connection;
    } catch (error) {
        console.log("Connected to DB");
    }
    console.log("Server is running on port 3500");
})