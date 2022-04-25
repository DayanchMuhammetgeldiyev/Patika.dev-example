const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/register', (req, res) => {
    res.send('/');
});

router.post('/register', (req, res) => {
    User.create(req.body, (error, user) => {
        res.redirect('/login');
    });
});

router.get('/login', (req, res) => {
    res.send('/login');
});

router.post('/login', (req, res) => {
   const { email, password } = req.body;
    User.findOne({ email, password }, (error, user) => {
        if (user) {
            if(user.password === password) {
            res.redirect('/');
        } else {
            res.redirect('/login');
        }
    }
}
    );
});


module.exports = router;