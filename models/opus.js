const mongoose = require('mongoose');

const opusSchema = mongoose.Schema({
    title: String,
    composer: String,
    opusData: String,
    tempo: Number,
    timeSignature: [Number],
    keySignature: [String],
    music: String,
    isPrivate: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Opus', opusSchema);