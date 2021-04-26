const mongoose = require('mongoose');

const friendSchema = mongoose.Schema({
    username: String,
    photUrl: String
})

module.exports = mongoose.model('Friend', friendSchema);