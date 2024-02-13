const ProductModel = require("../models/ProductModel")

exports.productListByProductID = async(req, res) =>{
    try {
        const id = req.params.id;
        const productList = await ProductModel.find({_id: id});
        res.send(productList);
        
    } catch (error) {
        res.send(error.message);
    }
}