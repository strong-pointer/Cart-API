const express = require('express');
const carts = require('../services/carts');
const router = new express.Router();
 
router.get('/', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await carts.getCarts(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.post('/', async (req, res, next) => {
  let options = { 
    "cartID": req.query.cartID,
  };


  try {
    const result = await carts.postCarts(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.put('/', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await carts.putCarts(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.delete('/', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await carts.deleteCarts(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:cartID', async (req, res, next) => {
  let options = { 
    "cartID": req.params.cartID,
  };


  try {
    const result = await carts.getCartID(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.delete('/:cartID', async (req, res, next) => {
  let options = { 
    "cartID": req.params.cartID,
  };


  try {
    const result = await carts.deleteCartID(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/:cartID/cartTime', async (req, res, next) => {
  let options = { 
    "cartID": req.params.cartID
  };


  try {
    const result = await carts.getCartIDCartTime(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.post('/:cartID/:productID/:productModifier', async (req, res, next) => {
  let options = { 
    "cartID": req.params.cartID,
    "productID": req.params.productID,
    "productModifier": req.params.productModifier,
  };


  try {
    const result = await carts.postCartIDProductIDProductModifier(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.delete('/:cartID/:productID/:productModifier', async (req, res, next) => {
  let options = { 
    "cartID": req.params.cartID,
    "productID": req.params.productID,
    "productModifier": req.params.productModifier,
  };


  try {
    const result = await carts.deleteCartIDProductIDProductModifier(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.put('/:cartID/:productID/:productModifier/:quantity', async (req, res, next) => {
  let options = { 
    "cartID": req.params.cartID,
    "productID": req.params.productID,
    "productModifier": req.params.productModifier,
    "quantity": req.params.quantity,
  };


  try {
    const result = await carts.putCartIDProductIDProductModifierQuantity(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;