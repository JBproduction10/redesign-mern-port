const experienceSchema = require('../models/experience');

exports.getExperience = async(req,res) =>{
    const experience = experienceSchema.find();
    try{
        res.json(experience);
    }
    catch(err){
        res.status(500).json({
            msg:`Can't find experience in controller`
        })
    }
}

exports.getExperienceId = async(req,res) =>{
    try{
        const experience = experienceSchema.findById(req.params.id);
        res.json(experience);
    }
    catch(err){
        res.status(500).json({
            msg: `Can't fetch specific experience`
        })
    }
};

exports.addExperience = async(req,res) =>{
    const {experience, projectBuilt} = req.body;
    try{
        const newExperience = new experienceSchema({
            experience, projectBuilt
        });
        await newExperience.save();
        res.json(newExperience);
    }
    catch(err){
        res.status(500).json({
            msg:`Can't add experience in controller`
        })
    }
};

exports.updateExperience = async(req,res) =>{
    const {experience, projectBuilt}=req.body;
    try{
        const newExperience = experienceSchema.findByIdAndUpdate({experience,projectBuilt}, req.params.id);
        let result = await newExperience.save();
        await result;
        res.json({
            msg: 'Successfully updated'
        });
    }
    catch(err){
        res.status(500).json({
            msg: `Can't update experience in controller`
        })
    }
};

exports.deleteExperience = async(req,res) =>{
    const experience =  experienceSchema.findByIdAndDelete(req.params.id);
    experience;
    res.json({
        msg:'Experience deleted'
    })
}
