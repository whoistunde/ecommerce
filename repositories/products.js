const Repository = require('./repository');

class ProductsRespository extends Repository {}

module.exports = new ProductsRespository('products.json');