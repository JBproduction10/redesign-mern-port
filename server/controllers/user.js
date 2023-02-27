const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

const user = {
    //Register
    registerUser: async(req,res) =>{
        const {username, email, password} = req.boy;
        const user = await User.findOne({email: email});

        if(user){
            return res.status(400).json({
                msg: 'Email already exists'
            })
        }

        // create password and update the user schema
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username: username,
            email: email,
            password: passwordHash
        })

        await newUser.save();
        res.json({msg: 'User registered'})
    },

    // Login
    loginUser: async(req,res) =>{
        try{
            const {email, password} = req.body;
            const user = await User.findOne({email:email});

            if(!user){
                return res.status(400).json({
                    msg:'Incorrect password'
                })
            };

            // if login is successful
            const payload={id: user._id,name:user.username};
            const token=jwt.sign(payload, process.env.SECRET,
                {expiresIn:'1d'});

            res.json({token});
        }
        catch(err){
            return res.status(500).json({
                msg:err.message
            })
        }
    },

    //Verify
    verifyToken: async(req,res) =>{
        try{
            const token = req.header("Authorization");
            if(!token)
                return res.send(false);
                
            jwt.verify(token, process.env.SECRET, async(err,verified) =>{
                if(err){
                    return res.send(false);
                }

                const user = await User.findById(req.params.id);
                if(!user) return res.send(false);

                return res.send(true);
            })
        }catch(err){
            return res.status(500).json({
                msg:err.message
            })
        }
    }
};

module.exports= user;