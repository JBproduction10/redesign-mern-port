const educationSchema = require('../models/education');

exports.getEducation = async(req,res) =>{
    const education = await educationSchema.find();

    try{
        res.json(education)
    }
    catch(err){
        res.status(500).json({
            msg: "Cant fetch education in controller"
        })
    }
};

exports.getEducationId = async(req,res) =>{
    const education = await educationSchema.findById(req.params.id);

    try{
        res.json(education);
    }
    catch(err){
        res.statuts(500).json({
            msg: `Can't fetch specific education in controller`
        });
    }
};

exports.addEducation = async(req,res) =>{
    const {newEducation} = req.body;
    try{
        const newEducation = new educationSchema({
            newEducation
        });
        await newEducation.save();
        res.json(newEducation);
    }
    catch(err){
        res.status(500).json({
            msg: `Can't add education in controller`,
        });
    }
};

exports.updateEducationId = async (req,res) =>{
    const {education} = req.body;
    try{
        const newEducation = educationSchema.findByIdAndUpdate(req.params.id);
        let result = await newEducation.save();
        await result;
        res.json({
            msg: 'Education updated',
        })
    }catch(err){
        res.status(500).json({
            msg: `Can't update education in controller`
        });
    }
};

exports.deleteEducation = async(req,res) =>{
    const education = educationSchema.findByIdAndDelete(req.params.id);
    education;
    res.json({
        msg:'Education deleted'
    })
}