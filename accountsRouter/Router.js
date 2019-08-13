const express = require('express');


const db = require('../data/dbConfig.js');

const router = express.Router();



router.get('/', (req, res) => {
    // Destructing the req.query and declaring the keys used in the db
    const { limit, sortby, sortdir } = req.query;
    const queries = db('name', 'budget').from('accounts');
    if (limit) {
        queries.limit(limit);
    }

    if (sortby) {
        queries.sortby(sortby);
    }

    if (sortdir) {
        queries.sortdir(sortdir);
    }
    // db("accounts")
    queries
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

router.delete('/:id', (req, res) => {
    db('accounts')
    .where({ id: req.params.id })
    .del()
        .then(record => {
            if (record > 0) {
                 res.status(200).json(record);
            }else {
                res.status(404).json({ message: "There was a problem deleting this account"});
            }
        }) .catch(err => {
            res.status(500).json({ message: "There was an error on the server" });
        })
});


module.exports = router;