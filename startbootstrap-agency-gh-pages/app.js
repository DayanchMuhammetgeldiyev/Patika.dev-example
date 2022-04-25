const express = require('express');
const { engine } = require('express-handlebars');
const user = require('./routes/users');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/test', {
   useNewUrlParser: true,
   useUnifiedTopology: true
  });

require('./config/db');

const app = express();

app.use(express.static('public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.use('/users', user);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});