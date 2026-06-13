const express =require("express");

const router =express.Router();

const {signup}=require("../controllers/auth.controller");
const {login}=require("../controllers/auth.controller");
const {refreshToken}=require("../controllers/auth.controller");
const authMiddleware =require("../middleware/auth.middleware");


router.post(
 "/signup",
 signup
);

router.post(
 "/login",
 login
);

router.post(
 "/refresh-token",
 refreshToken
);

router.get(
 "/dashboard",
 authMiddleware,
 (req,res)=>{

  res.json({
   message:
   "Welcome",
   user:req.user
  });

 });

module.exports =router;