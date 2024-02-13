const ProductModel = require("../models/ProductModel")


exports.productListByCategoryID = async(req, res) =>{
    try {
        const CategoryID = req.params.categoryID;
        const productListByCategory = await ProductModel.find({categoryID: CategoryID});
        res.send(productListByCategory);
        
    } catch (error) {
        res.send(error.message);
    }
}