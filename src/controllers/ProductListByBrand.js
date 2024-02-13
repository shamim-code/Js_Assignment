const ProductModel = require("../models/ProductModel")



exports.productListByBrandID = async(req, res) =>{
    try {
        const BrandID = req.params.brandID;
        const productListByBrandID = await ProductModel.find({brandID: BrandID});
        res.send(productListByBrandID);
        
    } catch (error) {
        res.send(error.message);
    }
}