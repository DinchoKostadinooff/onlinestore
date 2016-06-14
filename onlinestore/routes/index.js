var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('onlinestore-api/controllers/profile');
var ctrlAuth = require('onlinestore-api/controllers/authentication');
var ctrlProduct = require('onlinestore-api/controllers/product');
var ctrlShoppingCard = require('onlinestore-api/controllers/shoppingCard');

// UserProfile

router.get('/user/profile', auth, ctrlProfile.profileRead);
router.post('/user/products', auth, ctrlProduct.createProduct);
router.put('/user/products/:id', auth, ctrlProduct.updateProduct);
router.delete('/user/products/:id', auth, ctrlProduct.deleteProduct);
router.get('/user/products', auth, ctrlProduct.getProduct);

//shoppingCard

router.post('/shoppingcard/products/:id', auth, ctrlShoppingCard.createProduct);
router.delete('/shoppingcard/products/:id', auth, ctrlShoppingCard.deleteProduct);
router.get('/shoppingcard', auth, ctrlShoppingCard.getShoppingCard);

//public routes

router.get('/products', ctrlProduct.getAllProducts);
router.get('/product/:id', ctrlProduct.getProductById);
router.get('/products/:id', ctrlProduct.getProductByCategory);
// authentication

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
