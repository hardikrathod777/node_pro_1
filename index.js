const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
    fs.readFile('./index.html', (err, data) => {
        if (err) {
        res.statusCode = 500;
        res.end('<h1>Server Error</h1>');
        } else {
        res.statusCode = 200;
        res.end(data);
        }
    });
    } else if (req.url === '/about') {
    fs.readFile('./about.html', (err, data) => {
        if (err) {
        res.statusCode = 500;
        res.end('<h1>Server Error</h1>');
    } else {
        res.statusCode = 200;
        res.end(data);
    }
    });
    } else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
