const express = require('express');

const router = require('./accountsRouter/Router.js')
const server = express();

server.use(express.json());

server.use('/api/accounts', router);



module.exports = server;