const nodemailer=require('nodemailer')
const Transporter=nodemailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user:process.env.MAIL,
        pass:process.env.PASSI
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,   // 10 seconds
    socketTimeout: 10000      // 10 seconds
})
module.exports=Transporter