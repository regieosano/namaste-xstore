import express from 'express';

// Make server express
const server = express();

server.get('/', (req, res) => {
    res.send('Test Only of Xstore');
});

module.exports = server;