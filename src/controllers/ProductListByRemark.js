const ProductModel = require("../models/ProductModel")



exports.productListByRemark = async(req, res) =>{
    try {
        const Remark = req.params.Remark;
        const productListByBrandID = await ProductModel.find({remark: Remark});
        res.send(productListByBrandID);
        
    } catch (error) {
        res.send(error.message);
    }
}