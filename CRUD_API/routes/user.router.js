const express=require("express");
const User=require("../models/user.model");
const userRouter=express.Router();

//create new users--->
userRouter.post("/", async(req,res)=>{
    try {
        const {name,location}=req.body;
        const newUser=new User({name,location})
        const saveUser=await newUser.save()
        res.send({"msg":"New User Created", saveUser})
    } catch (error) {
        res.send(error)
    }
});

//get all users--->
userRouter.get("/all", async(req,res)=>{
    try {
        const getUser=await User.find();
        res.send(getUser)
    } catch (error) {
        res.send(error)
    }
})

//update the users--->
userRouter.put("/:id", async(req,res)=>{
    try {
        const {name,location}=req.body;
        const updateUser=await User.findByIdAndUpdate(
          req.params.id,
          {name,location}  
        )
        res.send({"msg":"User Update Successfully", updateUser})
    } catch (error) {
        res.send(error)
    }
})

//user deleted--->
userRouter.delete("/:id", async(req,res)=>{
    try {
        const deleteUser=await User.findByIdAndDelete(
          req.params.id 
        )
        res.send({"msg":"User Deleted Successfully", deleteUser})
    } catch (error) {
        res.send(error)
    }
})

module.exports=userRouter;