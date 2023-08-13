const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    res.render('register');
});

router.post('/', (req, res) => {
    const { username, password } = req.body;
    const query1 = `SELECT COUNT(*) AS count FROM Info WHERE username = '${username}'`
    const query2 = 'INSERT INTO Info (username, password) VALUES (?, ?)';
    const values = [username, password];

    db.query(query1, (err, results, fields) => {
        console.log('query1 worked', results);
        console.log(fields);
        console.log(err);
        const count = results[0].count;

        if(count === 0) {
            db.query(query2, values, (err, results, fields)=> {
                console.log('query2 worked', results);
                console.log(fields);
                if(err) {
                    console.log(err);
                }
                res.send('register success');
            });
        } else {
            res.send('register failed');
        }
    });
});

module.exports = router;
