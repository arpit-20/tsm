const express = require('express');
const router = express.Router();


//  imported customerModel 
const customersData = require('../models/customers');



var nodeMail = require('../logics/blogic');

this.mailOptions={}

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
        contact_form:req.body.contact_form,
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

    
        console.log("post consumer" + consumer);

    await consumer.save().then((consumerData)=>{
            if(req.body.service_form==true){

                console.log("service, form");
                this.mailOptions = {
                    from: 'Mail.theshockmechanica@gmail.com',
                    to: ['arpitghai20@gmail.com','theshockmechanica@gmail.com'],
                    cc:req.body.email,
                    subject: 'Test node mail',
                    text: `Hi` + ' ' + `${req.body.name}` + 
                    `This is an automated mail confirming your service request for` + ' ' + `${req.body.number_of_pairs}`  +` ` + `pairs of` + ` ` + `${req.body.shocker_brand}.` + ` ` + `The service requested is` +`type of service` +
                    'Hence,quotation for team' + ` ` + `${req.body.team_name}` + ` ` + `will be mailed to you by EOD.` +
                    `For any further queries, please don't hesitate to get in touch with us at (theshockmechanica@gmail.com or 9068056922).`+
                    `Sincerely,`+
                    `Harsh Jha`+
                    `The Shock Mechanica`
                    
                }
                console.log('==>>',this.mailOptions);
            }
            else if(req.body.purchase_form==true){
                this.mailOptions = {
                    from: 'Mail.theshockmechanica@gmail.com',
                    to: ['arpitghai20@gmail.com','theshockmechanica@gmail.com'],
                    cc:req.body.email,
                    subject: 'Test node mail',
                    text:`Hi` + ' ' + `${req.body.name}` + 
                    `This is an automated mail confirming your interest in buying` + ' ' + `${req.body.number_of_pieces}` + ` ` + `pieces of` + ` ` + `${req.body.shocker_brand}` + 
                    `Hence, quotation for team` + ` ` + `${req.body.team_name}` + ` ` + `will be mailed to you by EOD.` +
                    `For any further queries, please don't hesitate to get in touch with us at (theshockmechanica@gmail.com or 9068056922).`+
                    `Sincerely,`+
                    `Harsh Jha`+
                    `The Shock Mechanica`
                    
                }
            }else if(req.body.contact_form==true){
                this.mailOptions = {
                    from: 'Mail.theshockmechanica@gmail.com',
                    to: ['arpitghai20@gmail.com','theshockmechanica@gmail.com'],
                    cc:req.body.email,
                    subject: 'Test node mail',
                    text:`Hi` + ' ' + `${req.body.name}` +
                    `This is an automated mail considering your requirement of` + ' ' + `${req.body.any_other_requirement}`  + 
                    `We are looking in to your requirement and will respond you in time.` +
                    `For any further queries, please don't hesitate to get in touch with us at (theshockmechanica@gmail.com or 9068056922).`+
                    `Sincerely,`+
                    `Harsh Jha`+
                    `The Shock Mechanica`
                    
                }
            }


            nodeMail.sendMail(this.mailOptions, function (error, Info) {
                if (error) {
                    res.status(400).json(error)
                    console.log(error);
    
                } else {
                    if(Info.response){
                        
        res.status(201).json(consumerData);
                    console.log('email has been sent', Info.response);
                    }else{

                    console.log('email has been sent', Info.rejected);
                    }
    
                }
            })
        }).catch(err=>{

        res.status(400).send("Error" + err)
        })

        


   

  
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