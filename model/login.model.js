const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const users = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull:false,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    phone:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    isPremium:{
        type:Sequelize.BOOLEAN,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    },

})

module.exports = users;