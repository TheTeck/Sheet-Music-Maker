const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3(); // initialize the construcotr
// now s3 can crud on our s3 buckets

module.exports = {
  signup,
  login,
  update,
  index,
  show,
  deleteUser
};

async function deleteUser (req, res) {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.json({data: 'User removed'})
  } catch (error) {
    return res.stats(500).json(error)
  }
}

async function show(req, res) {
  try {
    const user = await User.findOne({_id: req.params.id});
    res.json(user);
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function index(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function update(req, res) {
  try {
    const user = await User.findOne({_id: req.params.id});
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.bio = req.body.bio;
    user.friends = req.body.friends
    await user.save();
    const token = createJWT(user);
    res.json({token});
  } catch (err) {
    return res.status(500).json(err);
  }
}

function signup(req, res) {
  console.log(req.body, req.file)

  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  // FilePath unique name to be saved to our bucket
  const filePath = `${uuidv4()}/${req.file.originalname}`
  const params = {Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer};
  //your bucket name goes where collectorcat is 
  //////////////////////////////////////////////////////////////////////////////////
  s3.upload(params, async function(err, data){
    console.log(data, 'from aws') // data.Location is our photoUrl that exists on aws
    const user = new User({...req.body, photoUrl: data.Location});
    try {
      await user.save();
      const token = createJWT(user); // user is the payload so this is the object in our jwt
      res.json({ token });
    } catch (err) {
      // Probably a duplicate email
      res.status(400).json(err);
    }



  })
  //////////////////////////////////////////////////////////////////////////////////
 
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    console.log(user, ' this user in login')
    if (!user) return res.status(401).json({err: 'bad credentials'});
    // had to update the password from req.body.pw, to req.body password
    user.comparePassword(req.body.password, (err, isMatch) => {
        
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}


/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
