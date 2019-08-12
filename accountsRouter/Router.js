const express = require('express');


const db = require('../data/dbConfig.js');

const router = express.Router();



router.get('/', (req, res) => {
    db("accounts")
        .then((accounts) => {
            res.status(200).json(accounts);
        }).catch((err) => {
            res.status(500).json({ message: "Could not retrieve accounts"});
        });
});

router.get('/:id', (req, res) => {
    
});

router.post('/', (req, res) => {
    
});

router.put('/', (req, res) => {
    
});

router.delete('/', (req, res) => {
    
});


module.exports = router;