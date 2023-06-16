const userService = require('../services/userService')
const authController = require('express').Router();

authController.get('/register', (req, res) => {
    // TODO replace with actual view by assignment
    res.render('register', {
        title: "Register Page"
    })
})
authController.post('/register', async (req, res) => {
    const token = await userService.register(req.body.username, req.body.password)
    res.redirect('/auth/register')
})

authController.get('/login', (req, res) => {
    res.render('login', {
        title: "Login Page"
    })
})
module.exports = authController;