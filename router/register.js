const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const db = require('../db');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.set('view engine', 'ejs');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const query1 = 'SELECT COUNT(*) AS count FROM info WHERE username = ?'
    const query2 = 'INSERT INTO info (username, password) VALUES (?, ?)';
    const values = [username, password];

    db.query(query1, [username], (error, results)=> {
        const count = results[0].count;

        if(count === 0) {
            db.query(query2, values, (error)=> {
                if(error) throw error;
                res.redirect('/login');
            });
        } else {
            res.render('register-fail');
        }
    });
});

module.exports = router;