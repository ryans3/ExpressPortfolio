let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
    //contact: Number,
    //address: String,
    //message: String

},
{
    collection: "first"
});

module.exports = mongoose.model('test', contactSchema);