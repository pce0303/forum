const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    res.render('createPost');
});

router.post('/', (req, res) => {
    const { title, content } = req.body;
    var writer = req.session.username;
    const values = [title, content, writer];

    const query = 'INSERT INTO post_table (title, content, writer) VALUES (?, ?, ?)';

    db.query(query, values, (err, results, fields) => {
        console.log('post saved successfully', results);
        console.log(fields);
        if(err) console.log(err);

        res.redirect('/');
    });
});

module.exports = router;
