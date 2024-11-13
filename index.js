const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

const path = require('path');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'wevas123',
  database: 'product_orders'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const products = require('./data/industrial.json');
app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/orders', (req, res) => {
  const { product, quantity } = req.body;
  
  const orderId = Date.now(); 
  db.query('INSERT INTO orders (product, quantity, orderId) VALUES (?, ?, ?)', 
  [product, quantity, orderId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Order placed successfully', orderId });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});