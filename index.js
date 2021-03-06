const express=require('express');

const mongoose=require('mongoose');

const cors=require('cors'); 

const app=express();

app.use(cors());

app.use(express.json());

const Port=process.env.PORT || 3000

const userRouter=require('./routes/userRoutes');

const customerRouter=require('./routes/customerRoutes');
const path=require("path");
app.use('/user',userRouter);

app.use('/customer',customerRouter);

// if(process.env.NODE_ENV == "production"){
    app.use(express.static(path.join(__dirname,'Shockmechanica','dist','Shockmechanica')));
    console.log("-->",__dirname);
 
        app.get("/*",(req,res)=>{
            res.sendFile(path.join(__dirname,'Shockmechanica','dist','Shockmechanica','index.html'));
        })
// }

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




app.listen((process.env.PORT || 3000),()=>{
    console.log('server started.... @ localhost://'+process.env.PORT)
    
})