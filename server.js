/**
 * Created by Edward101701 on 22-May-17.
*/
let express = require('express');
let config = require('./config/config');
let accounts = require('./routes/accounts');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/analgram');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('DB connection successfull'));
let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/accounts', accounts);

app.listen(config.port, () => {
    console.log('ag-server starts on port ' + config.port);
});