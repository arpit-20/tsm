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

            jwt.sign({userData},jwtkey,(err,token)=>{
                res.status(201).json({token});

                }
            );

        // res.status(201).json(userData);

         }).catch(err=>
            console.log("post error" + " " + err))


});




router.post('/login', async (req, res) => {

    usersData.findOne({email:req.body.email}).then((data)=>{
        
    // var decipher=crypto.createDecipher(algo,key);
        console.log('-->',req.body.password,data.password);
        
    var decrypted= decryptText(data.password);
    res.status(400).json(decrypted);
    console.log("decrypted password",decrypted);
    
    }).catch((err)=>{
        res.status(400).json(err);
        console.log('login error'+ ' '+err);
        
    })



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


/**  put route*/

// router.put('/:id', async(req,res)=>{
//     console.log('put request');

//     try{
//     let userData=await usersData.findById(req.params.id) 
//         userData.usn=req.body.usn;
//         userData.role=req.body.role;
//         userData.dob=req.body.dob;
//         userData.score=req.body.score;
//         userData.name=req.body.name;
//         userData.link=req.body.link;
//         const a1=await alien.save()
//     res.json(a1)
//     console.log(alien);

//     }catch(err){
//         console.log("hhh");

//         res.send('Error'+err)
//     }
//     })


/**  patch route*/

router.patch('/:id', async (req, res) => {
   
    try {
        console.log('patch request');
        if (req.body) {

            let userData = await usersData.findById(req.params.id)

            // for (const userKey in userData) {
            //     for (const bodyKey in req.body) {

            //         if (`${userKey}` == `${bodyKey}`) {

            //             if (`${userData[userKey]}` != `${req.body[bodyKey]}`) {

            //                 console.log(`${userKey}: ${req.body[userKey]}`);


            usersData.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((data) => {

                console.log('patch success'  + data);

                return res.status(200).send(data);

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