const { productBrandList } = require('../controllers/BrandList');
const { productCategoryList } = require('../controllers/CategoryList');
const { productListByBrandID } = require('../controllers/ProductListByBrand');
const { productListByCategoryID } = require('../controllers/ProductListByCategory');
const { productListByKeyword } = require('../controllers/ProductListByKeyWord');
const { productListByProductID } = require('../controllers/ProductListByProductID');
const { productListByRemark } = require('../controllers/ProductListByRemark');
const { ReviewByProductID } = require('../controllers/ProductReviewList');
const { SliderList } = require('../controllers/SliderList');

const router = require('express').Router();

router.get('/ProductBrandList', productBrandList)
router.get('/ProductCategoryList',productCategoryList)
router.get('/ProductSliderList',SliderList)
router.get('/ProductListByBrand/:BrandID',productListByBrandID)
router.get('/ProductListByCategory/:CategoryID',productListByCategoryID)
router.get('/ProductListByKeyword/:Keyword',productListByKeyword)
router.get('/ProductListByRemark/:Remark',productListByRemark)
router.get('/ProductDetails/:ProductID',productListByProductID)
router.get('/ProductReviewList/:ProductID',ReviewByProductID)
router.get('/UserOTP/:email')
router.get('/VerifyLogin/:email/:otp')
router.get('/UserLogout')
router.post('/CreateProfile')
router.post('/UpdateProfile')
router.get('/ReadProfile')
router.post('/SaveWishList')
router.post('/RemoveWishList')
router.get('/WishList')
router.post('/SaveCartList')
router.post('/RemoveCartList')
router.get('/CartList')

module.exports = router;