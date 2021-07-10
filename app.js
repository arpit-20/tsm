const express=require('express');

const mongoose=require('mongoose');

const cors=require('cors'); 

const app=express();

app.use(cors());

app.use(express.json());



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

app.listen(7200,()=>{
    console.log('server started....');
    
})