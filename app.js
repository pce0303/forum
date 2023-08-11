const express = require('express');
const port = 3000;
const app = require('./router/register');

app.get('/', (req, res) => {
    res.render('main');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
