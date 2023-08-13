const express = require('express');
const session = require('express-session');
const db = require('./db');

const registerRouter = require('./router/register');
const loginRouter = require('./router/login');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/login', (req, res) => {
    res.render('Login');
});

// app.get('/register', (req, res) => {
//     res.render('Register');
// });

app.listen(port, (error) => {
    if (error) console.error(error);
    console.log(`Server is running on port ${port}`);
});
