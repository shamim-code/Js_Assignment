const ProductModel = require("../models/ProductModel")



exports.productListByKeyword = async(req, res) =>{
    try {
        const Keyword = req.params.keyword;
        const productListByBrandID = await ProductModel.find({keyword: Keyword});
        res.send(productListByBrandID);
        
    } catch (error) {
        res.send(error.message);
    }
}