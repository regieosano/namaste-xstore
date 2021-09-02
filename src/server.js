import express from 'express';

// Make server express
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index');
});

module.exports = server;