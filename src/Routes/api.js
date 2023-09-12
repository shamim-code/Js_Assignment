
const express = require('express');
const router = express.Router();

const blog = require('../Controllers/blogController');
const comment = require('../Controllers/commentController');
const message = require('../Controllers/messageController');
const portfolio = require('../Controllers/portfolioController');
const product = require('../Controllers/productController');

//blog
router.get('/createblog',blog.create);
router.get('/readblog',blog.read);
router.get('/updateblog',blog.update);
router.get('/deleteblog',blog.delete);

//comment
router.get('/commentCreate',comment.create);
router.get('/commentRead',comment.read);
router.get('/commentDelete',comment.delete);
router.get('/commentUpdate',comment.update);

//message
router.get('/messageCreate',message.create);
router.get('/messageRead',message.read);
router.get('/messageDelete',message.delete);
router.get('/messageUpdate',message.update);

//message
router.get('/portfolioCreate',portfolio.create);
router.get('/portfolioRead',portfolio.read);
router.get('/portfolioDelete',portfolio.delete);
router.get('/portfolioUpdate',portfolio.update);

//product
router.get('/productCreate',product.create);
router.get('/productRead',product.read);
router.get('/productDelete',product.delete);
router.get('/productUpdate',product.update);

//undefined router
router.get('*',(req,res)=>{
    res.status(404).send('Page not found!');
})


module.exports = router;