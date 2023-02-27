const jwt = require('jsonwebtoken');
const user = require('../models/user');

const auth = (req,res,next) =>{
    const token = req.header('Authorization');

    try{
        if(!token){
            return res.status(400).json({
                msg:'Invalid authentication'
            });
        }
        jwt.verify(token,process.env.SECRET,(err,uer) =>{
            if(err){
                return res.status(400).json({
                    msg: 'Authorization failed'
                });
            }
            req.user= user;
            next();
        })
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
};

module.exports = auth;