// const express = require('express');
const app = require('./register');
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
    res.render('Login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = '';

    connection.query('', (error, result)=> {
        if(error) throw error;
        res.send('success');
    });
});