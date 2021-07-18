const express = require('express');
const router = express.Router();

//  import usersModel 
const usersData = require('../models/users');


var crypto=require('crypto');

var key="password";
var algo="ae256";

const jwt=require('jsonwebtoken');

jwtkey="jwt"

var config = {
    cryptkey: crypto.createHash('sha256').update('Nixnogen').digest(),
    iv: 'a2xhcgAAAAAAAAAA'
  }
  
  function encryptText (text) {
    console.log(config.cryptkey)
    var cipher = crypto.createCipheriv('aes-256-cbc', config.cryptkey, config.iv)
    return Buffer.concat([
      cipher.update(text),
      cipher.final()
    ]).toString('base64') // Output base64 string
  }
  
  function decryptText (text) {
    console.log(config.cryptkey)
    if (text === null || typeof text === 'undefined' || text === '') {
      return text
    }
    var decipher = crypto.createDecipheriv('aes-256-cbc', config.cryptkey, config.iv)
    return Buffer.concat([
      decipher.update(text, 'base64'), // Expect `text` to be a base64 string
      decipher.final()
    ]).toString()
  }

router.get('/', async (req, res) => {

    console.log("Get request for all....");

    try {
        const users = await usersData.find();
        res.status(200).json(users);

    } catch (error) {
        console.log(" get error " + " " + error);

        res.status(400).json("Error" + " " + error);
    }

});


router.get('/:id', async (req, res) => {
    console.log('Get request by id');

    try {
        const user = await usersData.findById(req.params.id)
        res.status(200).json(user);

    } catch (err) {
        console.log("get error" + err);

        res.status(400).json('error' + ' ' + error);
    }
});



router.post('/register', async (req, res) => {

       var encrypted= encryptText(req.body.password);
       console.log(encrypted);
        const user = new usersData({
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            dob: req.body.dob,
            gender: req.body.gender,
            password: encrypted,
        })
    

        console.log("post user" + encrypted);

         await user.save().then((userData)=>{
            res.status(201).json(userData);

                }).catch(err=>
            console.log("post error" + " " + err))


});





router.post('/login', async (req, res) => {
    console.log(req.body.email,req.body.password);
    if(req.body.email!=null && req.body.password!=null){

    usersData.findOne({email:req.body.email}).then((data)=>{
        
        console.log('-->',req.body.password,data.password);
        

    var decrypted= decryptText(data.password);

    console.log("decrypted password",decrypted);
    if(decrypted==req.body.password){
        console.log("password matched");
        jwt.sign({data},jwtkey,(err,token)=>{
            res.status(201).json({token});
        });

    // res.status(400).json({"token":data.password});
    }else{
        console.log("password not matched");
    }
    
    }).catch((err)=>{
        res.status(400).json(err);
        console.log('login error'+ ' '+err);
        
    })

    }else{
        res.status(400).json("login crednetials invalid")
    }



});





router.delete("/:id", async (req, res) => {
    try {
        console.log('user delete request');
        let userData = await usersData.findById(req.params.id)

        const deletedUser = await userData.delete();
        res.status(200).json(deletedUser)
    } catch (err) {
        res.send("err" + err)
    }

});


/**  patch route*/

router.patch('/:id', async (req, res) => {
   
    try {
        console.log('patch request');
        if (req.body) {

            if(req.body.password){
                 req.body.password=encryptText(req.body.password);
            }

          await  usersData.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((data) => {

                console.log('patch success'  + data);

                return res.status(200).json(data);

                res.end();
            }).catch((err) => {

                console.log('patch error' + ' ' + err);
            });

            // }
            // }

            //     }
            // }
        }
    } catch (error) {

        console.log('patch error');
        res.send("err" + error)
    }
});








module.exports = router;