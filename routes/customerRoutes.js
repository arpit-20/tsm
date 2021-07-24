const express = require('express');
const router = express.Router();


//  imported customerModel 
const customersData = require('../models/customers');



var nodeMail = require('../logics/blogic');

router.get('/', async (req, res) => {

    try {
        const consumers = await customersData.find();
        res.status(200).json(consumers);

    } catch (error) {
        console.log(" get error " + " " + error);

        res.status(400).json("Error" + " " + error);
    }

});


router.get('/:id', async (req, res) => {
    console.log('Get request by id');

    try {
        const consumer = await customersData.findById(req.params.id) //callback
        res.status(200).json(consumer);

    } catch (err) {
        console.log("get error" + err);

        res.status(400).json('error' + ' ' + error);
    }
});



router.post('/', async (req, res) => {

    const consumer = new customersData({

        name: req.body.name,
        email: req.body.email,
        purchase_form:req.body.purchase_form,
        service_form:req.body.service_form,
        team_name: req.body.team_name,
        mobile_number: req.body.mobile_number,
        shocker_brand: req.body.shocker_brand,
        number_of_pairs: req.body.number_of_pairs,
        type_of_service: req.body.type_of_service,
        type_of_shocker: req.body.type_of_shocker,
        problems_facing: req.body.problems_facing,
        part_type: req.body.part_type,
        number_of_peices: req.body.number_of_peices,
        other_requirement: req.body.other_requirement
    })

    try {
        console.log("post consumer" + consumer);

        let consumerData = await consumer.save();
        res.status(201).json(consumerData);

        if(`${req.body.service_form}`==true){
            var mailOptions = {
                from: 'theshockmechanica@gmail.com',
                to: ['arpitghai20@gmail.com',req.body.email],
                subject: 'Test node mail',
                text:  `following is the Quotation has been sent by you by The Shock Mechanica having your name`
                 + ' ' + `${req.body.name}` + ' ' + 'having gender' + ' ' + `${req.body.gender}` 
                 + ' having' + `${req.body.email}` + 'as email id ' + 'from' + ' ' + `${req.body.team_name}` 
                 + ' who has mobile number' + `${req.body.mobile_number}` + ' ' + 'having requested for quotaion to service' + ' ' + `${req.body.shocker_brand}` 
                 + ' where number of paids are' + `${req.body.number_of_pairs}` + ' facing problem of '  + ' ' + `${req.body.gender}`
                 + ' looking to buy ' + `${req.body.part_type}` + ' ' + 'having number of pieces' + ' ' + `${req.body.number_of_peices}` 
                 + ' also there are others requirements ' + `${req.body.other_requirement}`
    
            }
        }
        else if(`${req.body.purchase_form}`==true){
            var mailOptions = {
                from: 'theshockmechanica@gmail.com',
                to: ['arpitghai20@gmail.com',req.body.email],
                subject: 'Test node mail',
                text:  `following is the Quotation has been sent by you by The Shock Mechanica having your name`
                 + ' ' + `${req.body.name}` + ' ' + 'having gender' + ' ' + `${req.body.gender}` 
                 + ' having' + `${req.body.email}` + 'as email id ' + 'from' + ' ' + `${req.body.team_name}` 
                 + ' who has mobile number' + `${req.body.mobile_number}` + ' ' + 'having requested for quotaion to service' + ' ' + `${req.body.shocker_brand}` 
                 + ' where number of paids are' + `${req.body.number_of_pairs}` + ' facing problem of '  + ' ' + `${req.body.gender}`
                 + ' looking to buy ' + `${req.body.part_type}` + ' ' + 'having number of pieces' + ' ' + `${req.body.number_of_peices}` 
                 + ' also there are others requirements ' + `${req.body.other_requirement}`
    
            }
        }else{
            var mailOptions = {
                from: 'theshockmechanica@gmail.com',
                to: ['arpitghai20@gmail.com',req.body.email],
                subject: 'Test node mail',
                text:  `following is the Quotation has been sent by you by The Shock Mechanica having your name`
                 + ' ' + `${req.body.name}` + ' ' + 'having gender' + ' ' + `${req.body.gender}` 
                 + ' having' + `${req.body.email}` + 'as email id ' + 'from' + ' ' + `${req.body.team_name}` 
                 + ' who has mobile number' + `${req.body.mobile_number}` + ' ' + 'having requested for quotaion to service' + ' ' + `${req.body.shocker_brand}` 
                 + ' where number of paids are' + `${req.body.number_of_pairs}` + ' facing problem of '  + ' ' + `${req.body.gender}`
                 + ' looking to buy ' + `${req.body.part_type}` + ' ' + 'having number of pieces' + ' ' + `${req.body.number_of_peices}` 
                 + ' also there are others requirements ' + `${req.body.other_requirement}`
    
            }
        }

        var mailOptions = {
            from: 'theshockmechanica@gmail.com',
            to: ['arpitghai20@gmail.com',req.body.email],
            subject: 'Test node mail',
            text:  `following is the Quotation has been sent by you by The Shock Mechanica having your name`
             + ' ' + `${req.body.name}` + ' ' + 'having gender' + ' ' + `${req.body.gender}` 
             + ' having' + `${req.body.email}` + 'as email id ' + 'from' + ' ' + `${req.body.team_name}` 
             + ' who has mobile number' + `${req.body.mobile_number}` + ' ' + 'having requested for quotaion to service' + ' ' + `${req.body.shocker_brand}` 
             + ' where number of paids are' + `${req.body.number_of_pairs}` + ' facing problem of '  + ' ' + `${req.body.gender}`
             + ' looking to buy ' + `${req.body.part_type}` + ' ' + 'having number of pieces' + ' ' + `${req.body.number_of_peices}` 
             + ' also there are others requirements ' + `${req.body.other_requirement}`

        }
            nodeMail.sendMail(mailOptions, function (error, Info) {
            if (error) {
                console.log(error);

            } else {
                console.log('email has been sent', Info);

            }
        })

    } catch (err) {

        res.send("Error" + err)
    }
});



router.delete("/:id", async (req, res) => {
    try {
        console.log('consumer delete request');
        let consumerData = await customersData.findById(req.params.id)

        const deletedConsumer = await consumerData.delete();
        res.status(200).json(deletedConsumer)
    } catch (err) {
        res.send("err" + err)
    }

});


/**  put route*/

// router.put('/:id', async(req,res)=>{
//     console.log('put request');

//     try{
//     let consumerData=await consumersData.findById(req.params.id) 
//         consumerData.usn=req.body.usn;
//         consumerData.role=req.body.role;
//         consumerData.dob=req.body.dob;
//         consumerData.score=req.body.score;
//         consumerData.name=req.body.name;
//         consumerData.link=req.body.link;
//         const a1=await alien.save()
//     res.json(a1)
//     console.log(alien);

//     }catch(err){
//         console.log("hhh");

//         res.send('Error'+err)
//     }
//     })


/**  patch route*/


/**  patch route*/

router.patch('/:id', async (req, res) => {

    try {
        console.log('patch request');
        if (req.body) {

            await customersData.findByIdAndUpdate(req.params.id, req.body, { new: true }).then((data) => {

                console.log('patch success' + data);

                return res.status(200).send(data);

                res.end();
            }).catch((err) => {

                console.log('patch error' + ' ' + err);
            });

        }
    } catch (error) {

        console.log('patch error');
        res.send("err" + error)
    }
});






module.exports = router;