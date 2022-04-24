const express = require('express');
const { engine } = require('express-handlebars');


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

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});