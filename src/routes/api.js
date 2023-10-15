const express =require('express');
const WorkController=require("../controllers/workController");
const StudentController=require("../controllers/studentController");
const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");


const router =express.Router();

// student Manage
router.post("/registration",StudentController.registration);
router.post("/login",StudentController.login);

router.post("/createStudent",AuthVerifyMiddleware,StudentController.createStudent);
router.get("/getAllStudent",AuthVerifyMiddleware,StudentController.readAllStudent);
router.get("/deleteStudent",AuthVerifyMiddleware,StudentController.deleteStudent);
router.get("/updateStudent",AuthVerifyMiddleware,StudentController.updateStudent);
router.get("/RecoverVerifyEmail/:email",StudentController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",StudentController.RecoverVerifyOTP);
router.post("/RecoverResetPass",StudentController.RecoverResetPass);



// work Manage
router.post("/createWork",AuthVerifyMiddleware,WorkController.createWork);
router.get("/updateWork/:id/:status",AuthVerifyMiddleware,WorkController.updateWork);
router.get("/getAllWork",AuthVerifyMiddleware,WorkController.readAllWorks);
router.get("/deleteWork/:id",AuthVerifyMiddleware,WorkController.deleteWork);


module.exports=router;






































module.exports=router;