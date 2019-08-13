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
    db("accounts")
    .where({ id: req.params.id })
        .then((account) => {
            if (account) {
                res.status(200).json(account);
            } else {
                res.status(404).json({ message: "Could not retrieve specified account"});
            }
        })
        .catch((err) => {
            res.status(500).json({  message: "There was an error with the server" });
        });
});

router.post('/', (req, res) => {
    db("accounts").insert(id, account)
    
});

router.put('/', (req, res) => {
    
});

router.delete('/', (req, res) => {
    
});


module.exports = router;