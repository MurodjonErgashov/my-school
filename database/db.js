const mysql2 = require('mysql2');
const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: '1999',
    database: 'my-school',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    multipleStatements: true
});

module.exports = pool;