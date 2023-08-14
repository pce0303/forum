const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    const query = 'SELECT title FROM post_table';

    db.query(query, (err, results, fields) => {
        if (err) console.error(err);

        const titles = results.map(result => result.title);
        res.render('main', { titles });
    });
});

module.exports = router;