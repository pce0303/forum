const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
var router = express.Router();

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

app.set('views', '.././views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    var sql_insert = { username, password };

    connection.query('select username from Info where username=?', [username], (err,rows)=>{
        if(rows.length) {
            res.render('register-fail');
        }else{
            
        }
    })
})

module.exports = router;