const mongoose = require('mongoose');

const friendSchema = mongoose.Schema({
    username: String,
    photUrl: String,
    sharedOpera: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Opus'
    }]
})

module.exports = mongoose.model('Friend', friendSchema);