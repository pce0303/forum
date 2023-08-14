const express = require('express');
const session = require('express-session');
const db = require('./db');
const bodyParser = require('body-parser');

const registerRouter = require('./router/register');
const loginRouter = require('./router/login');
const postRouter = require('./router/post');
const mainRouter = require('./router/main');

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
app.use('/post', postRouter);
app.use('/', mainRouter);

app.use(express.static('./styles'));

app.listen(port, (error) => {
    if (error) console.error(error);
    console.log(`Server is running on port ${port}`);
});
