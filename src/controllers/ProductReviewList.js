const reviewList = require("../models/ReviewModel")

exports.ReviewByProductID = async(req, res) =>{
    try {
        const id = req.params.id;
        const productList = await reviewList.find({productID: id});
        res.send(productList);
        
    } catch (error) {
        res.send(error.message);
    }
}