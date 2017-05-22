/**
 * Created by Edward101701 on 22-May-17.
*/
let express = require('express');
let config = require('./config/config');
let accounts = require('./routes/accounts');

let app = express();
let router = express.Router();

app.get('/', (req, res) => {
    res.send('Hello World');
});

//router.use('/api/accounts', accounts);

app.use('/api/accounts', accounts);

app.listen(config.port, () => {
    console.log('ag-server starts on port ' + config.port);
});