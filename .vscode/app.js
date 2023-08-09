const registerRoutes = require('../router/register');

app.use(registerRoutes);

app.listen(3000, ()=>{
    console.log('server on');
});