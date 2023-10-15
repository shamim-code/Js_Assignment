const StudentModel = require("../models/StudentsModel");
const OTPModel = require("../models/OTPModel")

// Registration
exports.registration= async (req, res)=>{
    let reqBody=req.body;
    try{

        let result= await StudentModel.create(reqBody);
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}



//loginStudent
exports.login=async (req,res)=>{

    try{
        let reqBody=req.body;
        let result= await StudentModel.find(reqBody).count();
        if(result===1){
            // Create Token
            let Payload={
                exp:Math.floor(Date.now()/1000)+(24*60*60),
                data:reqBody['email']
            }
            let token=jwt.sign(Payload,"SecretKey123456789");
            res.status(200).json({status:"success",data:token})

        }
        else{
            // Login fail
            res.status(200).json({status:"fail",data:"No User Found"})
        }
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}


//create Student
exports.createStudent=async (req,res)=>{
    try{
        let reqBody=req.body
        reqBody.email=req.headers['email'];
        let result= await StudentModel.create(reqBody)
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}

//readAll
exports.readAllStudent=async (req,res)=>{
    try {
        let data = await StudentModel.find({});
        res.status(200).json({status:"Success",data:data});

    }catch (e){
        res.status(505).json({status:"failed",error:e.toString()})
    }
}

//Delete
exports.deleteStudent=async (req,res)=>{
    try {
        let id= req.params.id;
        let Query={_id:id};
        let result= await StudentModel.deleteOne(Query)
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}

//update
exports.updateStudent=async (req,res)=>{
    try{
        let id= req.params.id;
        let status= req.params.status;
        let Query={_id:id};
        let reqBody={status:status}

        let result= await StudentModel.updateOne(Query,reqBody)

        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}


//Recovery
exports.RecoverVerifyEmail=async (req,res)=>{
    let email = req.params.email;
    let OTPCode = Math.floor(100000 + Math.random() * 900000);
    let EmailText="Your Verification Code is ="+OTPCode
    let EmailSubject="Task manager verification code"

    let result= await StudentModel.find({email:email}).count();
    if(result===1){
        // Verification Email
        await SendEmailUtility(email,EmailText,EmailSubject);
        await OTPModel.create({email:email,otp:OTPCode})
        res.status(200).json({status:"success",data:"6 Digit Verification Code has been send"})

    }
    else{
        res.status(200).json({status:"fail",data:"No User Found"})
    }

}




exports.RecoverVerifyOTP=async (req,res)=>{
    let email = req.params.email;
    let OTPCode = req.params.otp;
    let status=0;
    let statusUpdate=1;

    let result= await OTPModel.find({email:email,otp:OTPCode,status:status}).count();
    // Time Validation 2 min
    if(result===1){
        await OTPModel.updateOne({email:email,otp:OTPCode,status:status}, {status:statusUpdate})
        res.status(200).json({status:"success",data:"Verification Completed"})
    }
    else{
        res.status(200).json({status:"fail",data:"Invalid Verification"})
    }

}



exports.RecoverResetPass=async (req,res)=>{

    let email = req.body['email'];
    let OTPCode = req.body['OTP'];
    let NewPass =  req.body['password'];
    let statusUpdate=1;

    let result= await OTPModel.find({email:email,otp:OTPCode,status:statusUpdate}).count();
    if(result===1){
        let result=await StudentModel.updateOne({email: email}, {password:NewPass})
        res.status(200).json({status:"success",data:"Password Reset Success"})
    }
    else{
        res.status(200).json({status:"fail",data:"Invalid Verification"})
    }
}


