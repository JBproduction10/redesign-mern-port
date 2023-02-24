const aboutSchema = require('../models/about');

exports.getAbout = async (req,res) =>{
    const about = await aboutSchema.find();
    try{
        res.json(about);
    }catch(err){
        res.status(500).json({msg: "Can't fetch about user"})
    }
};

exports.addAbout = async(req,res) =>{
    const {about} = req.body;
    try{
        const newAbout = new aboutSchema({
            about
        });

        await newAbout.save();
        res.json(newAbout);
    }
    catch(err){
        res.status(500).json({
            msg: ' Something  went in add about controller'
        })
    }
};

exports.getAboutId = async (req,res) =>{
    try{
        const about = aboutSchema.findById(req.params.id);
        res.json(about);
    }
    catch(err){
        res.status(500).json({
            msg: "Can't get specific about user in controller"
        });
    }
};

exports.updateAboutId = async(req,res) =>{
    const {about} = req.body;
    try{
        const newAbout = aboutSchema.findByIdAndUpdate(req.params.id, {about});
        let result = await newAbout.save();
        await result;
        res.json({msg: 'Successful updated'});
    }
    catch(err) {
        res.status(500).json({
            msg: "Can't update about user in controller"
        });
    }
}

exports.deleteAbout = async(req,res) =>{
    const about = aboutSchema.findByIdAndDelete(req.params.id);
    about;
    res.json({msg:'About user deleted'})
}