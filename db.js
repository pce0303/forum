const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'db.teamlog.kr',
    user: 'admin',
    password: 'teamlog2023!',
    database: 'choeun'
});

connection.connect((error) => {
    if (error) console.error;
    console.log('Connected to MySQL database!');
});

module.exports = connection;