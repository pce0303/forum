const mysql = require('mysql2');

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

module.exports = connection;