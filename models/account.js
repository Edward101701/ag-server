/**
 * Created by Edward on 23-May-17.
*/
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AccountSchema = new Schema({
    id: Number,
    login: String,
    title: String
});

module.exports = mongoose.model('Account', AccountSchema);
