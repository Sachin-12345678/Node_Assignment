const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb+srv://sachin:<password>@cluster0.1kuxcjb.mongodb.net/day6?retryWrites=true&w=majority&appName=Cluster0");

module.exports=connection;