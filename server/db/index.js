const db = require('./db');
//Import all models here
//e.g. const Product = require('./Product');
const User = require('./User');
const Address = require('./Address');

//Set up relations for models here
//e.g. Product.belongsTo(Room);

//export the database connection and models from this file
module.exports = { db, models: { User, Address } };
