const express = require('express');
const handlebars = require('express-handlebars');

module.exports = (app)=>{
const hbs = handlebars.create({
    extname:'.hbs'
})
app.engine('.hbs', hbs.engine())

// to skip in render .hbs
app.set('view engine', '.hbs')

app.use('/static', express.static('static'))

}