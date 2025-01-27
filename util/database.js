const Sequelize = require('sequelize');
const sequelize = new Sequelize('expense-website','root','Shahni@786',{
    dialect:'mysql',
    host:'127.0.0.1'
})

module.exports = sequelize;  