const http = require('http');
const express = require('express');
const mysql = require('mysql');

const hostname = '0.0.0.0';
const port = 8080;
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    password: '',
    database: 'vfansns'
});

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/signup', (req, res) => {
    res.render('signup.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/timeline', (req, res) => {
    res.render('timeline.ejs');
});

app.get('/mypage', (req, res) => {
    res.render('mypage.ejs');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
