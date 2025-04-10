const mysql = require('mysql'); 
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gym', 
});

const db2= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'products', 
});

const db3= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users', 
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: 'Access denied' });

    jwt.verify(token, 'secretkey', (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

// Register Route
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ error: err });

        const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.query(sql, [username, hash], (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'User registered successfully!' });
        });
    });
});

// Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length === 0) return res.status(401).json({ error: 'User not found' });

        bcrypt.compare(password, results[0].password, (err, match) => {
            if (err) return res.status(500).json({ error: err });
            if (!match) return res.status(401).json({ error: 'Incorrect password' });

            const token = jwt.sign({ id: results[0].id }, 'secretkey', { expiresIn: '1h' });
            res.json({ message: 'Login successful!', token });
        });
    });

    // Add Product Route
app.post('/products', authenticateToken, (req, res) => {
    const { name, price, description } = req.body;

    const sql = 'INSERT INTO products (name, price, description) VALUES (?, ?, ?)';
    db.query(sql, [name, price, description], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Product added successfully!' });
    });
});

// Get All Products Route
app.get('/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Create Order Route
app.post('/orders', authenticateToken, (req, res) => {
    const { userId, productId, quantity } = req.body;

    const sql = 'INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)';
    db.query(sql, [userId, productId, quantity], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Order placed successfully!' });
    });
});

// Get User Orders Route
app.get('/orders', authenticateToken, (req, res) => {
    const sql = 'SELECT * FROM orders WHERE user_id = ?';
    db.query(sql, [req.user.id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Update Order Route
app.put('/orders/:id', authenticateToken, (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    const sql = 'UPDATE orders SET quantity = ? WHERE id = ? AND user_id = ? AND prodict_id = ?';
    db.query(sql, [quantity, id, req.user.id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Order not found or not authorized' });
        res.json({ message: 'Order updated successfully!' });
    });
});


// Remove Item from Order Route
app.delete('/orders/:id', authenticateToken, (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM order WHERE id = ? AND user_id = ?';
    db.query(sql, [id, req.user.id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Order item removed successfully!' });
    });
});

//Update User Route
app.put('/users/:id', authenticateToken, (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ error: err });

        const sql = 'UPDATE users SET username = ?, password = ? WHERE id = ?';
        db.query(sql, [username, hash, id], (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'User updated successfully!' });
        });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

});
