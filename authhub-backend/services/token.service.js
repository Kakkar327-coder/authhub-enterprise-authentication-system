const RefreshToken =
 require("../models/RefreshToken");

const saveRefreshToken =
 async(
  userId,
  token
 )=>{

 return await RefreshToken.create({
  user:userId,
  token,
  expiresAt:
   new Date(
    Date.now() +
    7*24*60*60*1000
   )
 });
};

module.exports = {
 saveRefreshToken
};