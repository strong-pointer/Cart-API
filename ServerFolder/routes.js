module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/carts', require('./routes/carts.route'));

};
