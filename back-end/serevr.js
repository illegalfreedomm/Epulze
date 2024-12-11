const express =require('express');
const path =require('path');
const cors =require('cors');
const mongoose =require('mongoose');
const {type} =require('os');

const app=express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

const mongoURI = '';
mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log('mongoDB Connected '))
    .catch(err=>console.log('mongoDB connection error happend',err));

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})