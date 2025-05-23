
const mysql = require('mysql2/promise');
const fs = require('fs');

(async () => {
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'webdev',        // Change if needed
    password: '',          // Change if needed
    database: 'sportswear_hub',
    waitForConnections: true,
    connectionLimit: 10
  });

  const data = fs.readFileSync('./products.json', 'utf8');
  const products = JSON.parse(data);

  const conn = await pool.getConnection();
  try {
     // ✅ Clear existing products to avoid duplicates
    await conn.query('DELETE FROM products');
    for (const product of products) {
      const { name, price, category, image_url } = product;
      await conn.query(
        'INSERT INTO products (name, price, category, image_url) VALUES (?, ?, ?, ?)',
        [name, price, category, image_url]
      );
    }
    console.log('✅ All products inserted successfully!');
  } catch (err) {
    console.error('❌ Error inserting products:', err.message);
  } finally {
    conn.release();
    pool.end();
  }
})();
