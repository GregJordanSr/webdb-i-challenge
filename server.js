const express = require('express');

const router = require('./accountsRouter/Router.js')
const server = express();

server.use(express.json());

server.use('/api/accounts', router);

// server.get('/', (req, res) => {
    
// });

// server.get('/:id', (req, res) => {
    
// });

// server.post('/', (req, res) => {
    
// });

// server.put('/', (req, res) => {
    
// });

// server.delete('/', (req, res) => {
    
// });

module.exports = server;