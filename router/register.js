const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mysql = require('mysql2');

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

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const query = 'INSERT INTO Info (username, password) VALUES (?, ?)';
    const values = [username, password];

    connection.query(query, values, (error, result)=> {
        if(error) throw error;
        res.status(201).json({ id: result.inserted });
        console.log('inserted : username, password');
        res.send('success');
    });
});

module.exports = router;