const express = require('express');
const registerRouter = require('./router/register');
const loginRouter = require('./router/login');

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.get('/', (req, res) => {
    res.render('main');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
