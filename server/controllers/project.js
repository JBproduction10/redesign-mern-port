const projectSchema = require('../models/project');

exports.getProject = async(req,res) =>{
    const project = projectSchema.find();
    try{
        res.json(project);
    }
    catch(err){
        res.status(500).json({
            msg: `Can't fetch project`
        })
    }
};

exports.getProjectId = async(req,res)=>{
    try{
        const project = projectSchema.findById(req.params.id);
        res.json(project);
    }
    catch(err){
        res.status(500).json({
            msg:`Can't fetch specific project in controller`
        });
    }
};

exports.addProject = async(req,res) =>{
    const {id, title, description, images, category} = req.body;
    try{
        const newProject = new projectSchema({
            id,
            title,
            description,
            images,
            category
        });

        await newProject.save();
        res.json(newProject);
    }
    catch(err){
        res.status(500).json({
            msg:`Can't add project in controller`
        });
    }
};

exports.updateProjectId = async(req,res)=>{
    const {id,title,description,images,category} = req.body;
    try{
        const newProject = projectSchema.findByIdAndUpdate(req.params.id,
            {id,title,description,images,category});

        let result = await newProject.save();
        await result;
        res.json({
            msg:'Successfuly updated'
        });
    }
    catch(err){
        res.status(500).json({
            msg:`Can't update project in controller`
        })
    }
};

exports.deleteProjectId = async(req,res)=>{
    const project = projectSchema.findByIdAndDelete(req.params.id);
    project;
    res.json({
        msg:'Successfully deleted'
    })
}