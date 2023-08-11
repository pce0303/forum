const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/login', (req, res) => {
    res.render('Login');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    const values = [ username, password ];

    db.query(query, values, (error, result)=> {
        if(error) console.error;

        if(result.length > 0) {
            req.session.isLoggedIn = true;
            req.session.username = result[0].username;

            res.redirect('/');
        } else {
            res.render('login-fail');
        }
    });
});

module.exports = router;
