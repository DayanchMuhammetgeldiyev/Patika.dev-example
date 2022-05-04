const express = require('express');
const app = express();
const route = require('./routes/routesPage');

// Temaplate engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));

app.use('/', route);

app.listen (3000, () => {
    console.log('Server is running on port 3000');
});