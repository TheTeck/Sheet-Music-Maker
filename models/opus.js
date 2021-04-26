const mongoose = require('mongoose');

const opusSchema = mongoose.Schema({
    title: String,
    composer: String,
    opusData: String,
    tempo: String,
    timeSignature: [String],
    keySignature: [String],
    music: String,
    isPrivate: {
        type: Boolean,
        default: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Opus', opusSchema);