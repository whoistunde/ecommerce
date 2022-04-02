const Repository = require('./repository');

class cartsRespository extends Repository {}

module.exports = new cartsRespository('carts.json');