const Opus = require('../models/opus');

module.exports = {
    create,
    index
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

async function index(req, res){
    try {

        // on a query aka .find({}) you just call .exec() to execulate the .populate('user')
        const opera = await Opus.find({}).populate('user').exec()
        // userSchema.set('toObject') gets invoked, to delete the password
        // when we populate the user so we don't have to worry about sending over the password!
        
        res.status(200).json({opera})
    } catch(err){
        res.json(err)
    }
}