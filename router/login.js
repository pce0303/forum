const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
    host: 'db.teamlog.kr',
    user: 'admin',
    password: 'teamlog2023!',
    database: 'choeun'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.set('view engine', 'ejs');

router.get('/login', (req, res) => {
    res.render('Login');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    const values = [ username, password ];

    connection.query(query, values, (error, result)=> {
        if(error) throw error;
        res.render('')
    });
});

module.exports = router;
