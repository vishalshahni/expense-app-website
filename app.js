const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/route');
const path = require('path');
const cors = require('cors');
const port = 8000;
const bcrypt = require('bcrypt');
const user = require('./model/login.model');
const sequelize = require('./util/database');

const app = express();


app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',router);

//sequelize.sync({force:true})
sequelize.sync()
.then(()=>{
    app.listen(port);
})
.catch(err=>console.log(err));



