const http = require('http');
const express = require('express');

const hostname = '0.0.0.0';
const port = 8080;
const app = express();

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
