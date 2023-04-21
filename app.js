const express = require('express');
const hbs = require('hbs');
require('dotenv').config();


const app = express()

const port = process.env.PORT;
const params = {
    name: 'Gio Arango',
    title: 'Curso de Node'
}

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estático
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('Home', params);
})

app.get('/generic', (req, res) => {
    res.render('Generic', params);
})

app.get('/elements', (req, res) => {
    res.render('Elements', params);
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port);