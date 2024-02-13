const BrandModel = require("../models/BrandModel")



exports.productBrandList = async(req, res) =>{
    try {
        const BrandList = await BrandModel.find();
        res.send(BrandList);
        
    } catch (error) {
        res.send(error.message);
    }
}