const CategoryModel = require("../models/CategoryModel")



exports.productCategoryList = async(req, res) =>{
    try {
        const CategoryList = await CategoryModel.find();
        res.send(CategoryList);
        
    } catch (error) {
        res.send(error.message);
    }
}