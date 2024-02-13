const ProductSliderModel = require("../models/ProductSliderModel")



exports.SliderList = async(req, res) =>{
    try {
        const SliderList = await ProductSliderModel.find();
        res.send(SliderList);
        
    } catch (error) {
        res.send(error.message);
    }
}