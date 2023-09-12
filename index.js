

const express = require('express');
const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

app.listen(process.env.RUNNING_PORT,()=>{
    console.log("server running!!!");
});