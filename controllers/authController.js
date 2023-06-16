const authController = require('express').Router();

authController.get('/register',(req,res)=>{
    res.render('register')
})

authController.get('/login',(req,res)=>{
    res.render('login')
})
module.exports = authController;