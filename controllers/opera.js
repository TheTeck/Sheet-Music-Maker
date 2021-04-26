const Opus = require('../models/opus');

module.exports = {
    create
}


async function create(req, res) {

    console.log(req.user, 'req.user')
    
        const opus = await Opus.create({
            title: req.body.title,
            composer: req.body.composer,
            opusData: 'Opus Number',
            tempo: req.body.tempo,
            timeSignature: req.body.timeSignature,
            keySignature: req.body.keySignature,
            isPrivate: true,
            user: req.user
        });

    try {

        const newOpus = new Opus(opus)
        await newOpus.save()

        
        res.status(201).json({opus: newOpus})

    } catch (error) {
        res.json({data: error});
    }
}