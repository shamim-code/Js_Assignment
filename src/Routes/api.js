const express = require('express');
const router = express.Router();

const blog =require('../Controllers/blogController');
const details =require('../Controllers/blogDetailsController');
const comment =require('../Controllers/commentController');
const message =require('../Controllers/messageController');
const portfolio =require('../Controllers/portfolioController');
const product =require('../Controllers/productController');
const profit =require('../Controllers/profitController');
const project =require('../Controllers/projectController');
const service =require('../Controllers/serviceController');
const title =require('../Controllers/titleController');

//blogController
router.get('/blogCreate',blog.create);
router.get('/blogRead',blog.read);
router.get('/blogDelete',blog.delete);
router.get('/blogUpdate',blog.update);

//Details
router.get('/detailsCreate',details.create);
router.get('/detailsRead',details.read);
router.get('/detailsDelete',details.delete);
router.get('/detailsUpdate',details.update);

//comment
router.get('/commentCreate',comment.create);
router.get('/commentRead',comment.read);
router.get('/commentDelete',comment.delete);
router.get('/commentUpdate',comment.update);

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

//profit
router.get('/profitCreate',profit.create);
router.get('/profitRead',profit.read);
router.get('/profitDelete',profit.delete);
router.get('/profitUpdate',profit.update);

//project
router.get('/projectCreate',project.create);
router.get('/projectRead',project.read);
router.get('/projectDelete',project.delete);
router.get('/projectUpdate',project.update);

//service
router.get('/serviceCreate',service.create);
router.get('/serviceRead',service.read);
router.get('/serviceDelete',service.delete);
router.get('/serviceUpdate',service.update);

//title
router.get('/titleCreate',title.create);
router.get('/titleRead',title.read);
router.get('/titleDelete',title.delete);
router.get('/titleUpdate',title.update);


module.exports = router;