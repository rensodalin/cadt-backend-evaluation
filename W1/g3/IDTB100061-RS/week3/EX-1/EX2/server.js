// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to log every request
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next();
});

// GET /
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome to the Home Page</h1>
                <p>This is a simple Node.js server.</p>
            </body>
        </html>
    `);
});

// GET /about
app.get('/about', (req, res) => {
    res.send('About us: at CADT, we love node.js');
});

// GET /contact
app.get('/contact', (req, res) => {
    res.send('You can reach us via email...');
});

// GET /products
app.get('/products', (req, res) => {
    res.send('Buy one get one...');
});

// GET /project
app.get('/project', (req, res) => {
    res.send('Here are our awesome projects');
});

// 404 Not Found
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
