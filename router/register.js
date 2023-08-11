const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

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

        if(error) console.error;

        if(count === 0) {
            db.query(query2, values, (error)=> {
                if(error) console.error;
                res.redirect('/login');
            });
        } else {
            res.render('register-fail');
        }
    });
});

module.exports = router;