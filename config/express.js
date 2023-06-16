const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');



module.exports = (app) => {
    const hbs = handlebars.create({
        extname: '.hbs'
    })
    app.engine('.hbs', hbs.engine)
    // .hbs da e po podrazbirane razshirenie i da go propuskame po-natatyk
    app.set('view engine', '.hbs');
    
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

}