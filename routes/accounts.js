/**
 * Created by Edward on 22-May-17.
*/

let express = require('express');
let router = express.Router();

router.route('/')
    .get((req, res) => {
        // Return a set of accounts
        res.send('Here will be a set of accounts');
    })
    .post((req, res) => {
        // Add new account to accounts
        res.send('Add new account');
});

module.exports = router;