const express = require('express');
const app = express();
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    connection.query('insert into Info (username, password) values (?, ?)', [username, password], (error, result)=> {
        if(error) throw error;
        res.status(201).json({ id: result.inserted });
        console.log('inserted : username, password');
        res.send('success');
    });
});

module.exports = app;