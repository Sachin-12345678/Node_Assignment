const express=require("express");
const connection=require("./db")
const userRouter=require("./routes/user.route")
const authenticate=require("./middlewares/authenticate.middleware");
const cors=require("cors");
require("dotenv").config(); 
const app=express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("All is correct.....")
});

app.use("/", userRouter)
app.use(authenticate);


app.listen(process.env.port, async()=>{
    try {
        await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
    console.log("Serevr is running on port 3000");
})