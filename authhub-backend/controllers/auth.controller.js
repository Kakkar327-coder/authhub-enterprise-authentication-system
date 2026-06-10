const bcrypt =require("bcryptjs");

const ApiResponse =require("../utils/ApiResponse");

const {createUser}=require("../services/auth.service");

exports.signup =async (req,res)=>{

 try{

 const {name,email,password} = req.body;

 const hashedPassword = await bcrypt.hash(password,10);

 const user =await createUser({
   name,
   email,
   password:
   hashedPassword
 });

 return res.status(201).json(
  new ApiResponse(true,"User Registered",user)
 );

 }catch(error){

  return res.status(500).json(new ApiResponse(false,error.message));
 }

};