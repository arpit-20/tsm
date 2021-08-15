const express=require('express');

const mongoose=require('mongoose');

const cors=require('cors'); 

const app=express();

app.use(cors());

app.use(express.json());

const Port=process.env.PORT || 3000

const userRouter=require('./routes/userRoutes');

const customerRouter=require('./routes/customerRoutes');

app.use('/user',userRouter);

app.use('/customer',customerRouter);

mongoose.connect('mongodb+srv://TSM123:uTfXYXKjnYBVPO0x@cluster0.kzcr0.mongodb.net/TSM?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
mongoose.set('useFindAndModify', false),
mongoose.set('useCreateIndex', true)
).then(()=>{
    console.log('Db connected........');
    
}).catch((err)=>{
    console.log('Not able to connect DB' +  ' '+err);
    
})


if(process.env.NODE_ENV == "production"){
    app.use(express.static("Shockmechanica/dist"));
    const path=require("path");
        app.get("*",(req,res)=>{
            res.sendFile(path.resolve("server","Shockmechanica","dist","index.html"));
        })
}

app.listen(process.env.PORT || 3000),()=>{
    console.log('server started.... @ localhost://3000');
    
})