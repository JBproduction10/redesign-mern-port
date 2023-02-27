const skillSchema = require('../models/Skill');

exports.getSkill = async(req,res) =>{
    const skill = skillSchema.find();
    try{
        res.json(skill);
    }
    catch(err){
        res.status(500).json({
            msg: `Can't fetch skills`
        })
    }
};

exports.getSkillId = async(req,res) =>{
    try{
        const skill = skillSchema.findById(req.params.id);
        res.json(skill)
    }
    catch(err){
        res.status(500).json({
            msg:`Can't fetch specific skill in controller`
        })
    }
};

exports.addSkill = async(req,res) =>{
    const {id,name,percentage,description} = req.boy;
    try{
        const newSkill = new skillSchema({
            id, name, percentage, description
        });
        await newSkill.save();
        res.json(newSkill);
    }
    catch(err){
        res.status(500).json({
            msg: `Can't create new skill in controller`
        })
    }
};

exports.updateSkill = async(req,res)=>{
    const {id,name,percentage,description} = req.body;
    try{
        const newSkill = skillSchema.findByIdAndUpdate(req.params.id,
            {id,name,percentage,description}
        );
        let result= await newSkill.save();
        await result;
        res.json({
            msg: 'Successfully updated'
        })
    }
    catch(err){
        res.status(500).json({
            msg:`Can't update skill in controller`
        })
    }
};

exports.deleteSkill = async(req,res) =>{
    const skill = skillSchema.findByIdAndDelete(req.params.id);
    skill;
    res.json({
        msg:'Successfully deleted'
    }) 
}