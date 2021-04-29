const Opus = require('../models/opus');

module.exports = {
    create,
    index,
    deleteOpus,
    show
}

async function show (req, res) {
    try {
        const opus = await Opus.findOne({_id: req.params.id})
        res.status(200).json({opus: opus});
    } catch (error) {
        res.json({data: error})
    }
}

async function create(req, res) {
    
        const opus = await Opus.create({
            title: req.body.title,
            composer: req.body.composer,
            opusData: 'Opus Number',
            tempo: req.body.tempo,
            timeSignature: req.body.timeSignature,
            keySignature: req.body.keySignature,
            music: req.body.music,
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

async function index(req, res){
    try {
        const opera = await Opus.find({user: req.user._id}) 
        res.status(200).json({opera})
    } catch(err){
        res.json(err)
    }
}

async function deleteOpus (req, res) {
    try {
        await Opus.findByIdAndDelete(req.params.id);
        res.json({data: 'opus removed'})
    } catch(err){
        res.json({error: err})
    }
}