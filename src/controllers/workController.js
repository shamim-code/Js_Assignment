const workModel = require("../models/WorksModel");
const jwt = require("jsonwebtoken");
const OTPModel = require("../models/OTPModel");
const SendEmailUtility = require("../utility/SendEmailUtility");



exports.createWork=async (req,res)=>{
    try{
        let reqBody=req.body
        reqBody.email=req.headers['email'];
        let result= await workModel.create(reqBody)
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}


exports.deleteWork=async (req,res)=>{
    try {
        let id= req.params.id;
        let Query={_id:id};
        let result= await workModel.deleteOne(Query)
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}


//readAll
exports.readAllWorks=async (req,res)=>{
    try {
        let data = await workModel.find({});
        res.status(200).json({status:"Success",data:data});

    }catch (e){
        res.status(505).json({status:"failed",error:e.toString()})
    }
}


exports.updateWork=async (req,res)=>{
    try{
        let id= req.params.id;
        let status= req.params.status;
        let Query={_id:id};
        let reqBody={status:status}

        let result= await workModel.updateOne(Query,reqBody)

        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}

























