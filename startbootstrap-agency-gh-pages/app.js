const express = require('express');
const { engine } = require('express-handlebars');
const user = require('./routes/users');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressSession = require('express-session'); 

const app = express();


mongoose.connect('mongodb://127.0.0.1/test', {
   useNewUrlParser: true,
   useUnifiedTopology: true
  });

app.use(expressSession({
    secret: 'testotesto',
    resave: false,
    saveUninitialized: true
    }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./config/db');
app.use('/users', user);

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

app.get('/login', (req, res) => {
    res.render('login');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});