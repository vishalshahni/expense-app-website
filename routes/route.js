const Express = require('express');
const route = Express.Router();
const adminController = require('../controller/admin');
const apiController = require('../controller/admin.api');


route.get('/home',adminController.getHome);
route.get('/add-expense',adminController.getExpense)
route.get('/support',adminController.getSupport);
route.get('/login',adminController.getLogin);
route.get('/signup',adminController.getSignup);
route.post('/api/login',apiController.getUser);
route.post('/api/register',apiController.registerUser);




module.exports = route;