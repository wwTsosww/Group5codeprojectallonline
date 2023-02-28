//ท็อป
const express = require('express');
const {GetpFont,GetproductsByid,searchProducts} = require('.././api/fontAPI');
const routes = express.Router();

routes.get('/Pd/:productType',GetpFont);
routes.get('/Pd/:id',GetproductsByid);
routes.get('/Pd',searchProducts);

module.exports = routes;