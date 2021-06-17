const mongoose=require("mongoose");

let userSchema=new mongoose.Schema({
  
    email:String,
    first_name:String,
    last_name:String,
    dob:Date,
    gender:String,
    password:String,
        
});

const userModel=mongoose.model('users',userSchema);

module.exports=userModel;