const path = require('path');

exports.getHome = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','index.html'));
}
exports.getLogin = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','login.html'));
}
exports.getSignup = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','signup.html'));
}
exports.getSupport = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','support.html'));
}
exports.getForget = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','forget.html'));
}
exports.getExpense = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','expense.html'));
}
