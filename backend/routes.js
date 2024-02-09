const studentModel = require('./model/student.model');

const router = require('express').Router();

router.post('/registration', async(req, res) => {

    try {

        const newData = await new studentModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender : req.body.gender,
            dateOfBirth: req.body.dob,
            nationality: req.body.nationality,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone,
            admissionDate: req.body.admissionDate,
            courses: req.body.courses
        })

        await newData.save();
        res.json({message:"success", data:newData});
        
    } catch (error) {

        res.send({error: error.message});
        
    }

})


router.get('/getall', async (req, res) => {

    try {

        const alldata = await studentModel.find();
        res.send(alldata);
        
    } catch (error) {
        res.send({error: error.message});
    }
})


module.exports = router;