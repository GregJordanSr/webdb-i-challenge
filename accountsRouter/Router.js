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
    .first()
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
    const {name, budget} = req.body;
    accountBody = req.body;
   
        db('accounts').insert(accountBody)
           
        .then((account) => {
                res.status(201).json(account)
          }).catch(err => {
                res.status(500).json({message: "There was an error with server"  });
    })
})


router.put('/:id', (req, res) => {
    const change = req.body;

    db('accounts')
        .where({ id: req.params.id })
        .update(change)
            .then((record) => {
                if (!record > 0) {
                   res.status(404).json({ message: " This account was not updated. "})
                } else {
                    res.status(200).json(change);
                }
                
            }).catch((err) => {
                res.status(500).json({ message: "There was an error on the server"});
            });
});

router.delete('/', (req, res) => {
    
});


module.exports = router;