var nodeMailer=require('nodemailer');




var transport=nodeMailer.createTransport({
host:'smtp.gmail.com',
port:587,
secure:false,
requireTLS:true,
auth:{
    user:'theshockmechanica@gmail.com',
    pass:'tsmjatayu'
}
})


// var mailOptions={
//     from:'theshockmechanica@gmail.com',
//     to:'theshockmechanica@gmail.com',
//     subject:'Test node mail',
//     text:'TSM Mail Api testing'
// }


// transport.sendMail(mailOptions,function(error,Info) {
//     if(error){
//         console.log(error);
        
//     }else{
//         console.log('email has been sent',Info);
        
//     }
// })

module.exports=transport;