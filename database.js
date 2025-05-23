const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'webdev', // ✅ use the new user
  password: '',   // ✅ no password
  database: 'sportswear_hub',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
