/**
 * Created by Edward on 22-May-17.
*/

let express = require('express');
let router = express.Router();
let Account = require('../models/account');

router.route('/')
    .get((req, res) => {
        Account.find((err, accounts) => {
            if (err)
                res.send(err)

            res.send(accounts);
        });
    })
    .post((req, res) => {
        let body = req.body;
        body.id = +body.id;

        let account = new Account(body);
        account.save((err) => {
            if (err)
                res.send(err);

            res.json({message: 'Post created ' + account._id});
        });
});

module.exports = router;