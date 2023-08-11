const express = require('express');
const session = require('express-session');

const registerRouter = require('./router/register');
const loginRouter = require('./router/login');

const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.get('/', (req, res) => {
    res.render('main');
});

app.listen(port, (error) => {
    if (error) console.error;
    console.log(`Server is running on port ${port}`);
});
