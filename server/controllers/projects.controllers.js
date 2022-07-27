const Project = require('../models/projects.models')

module.exports.getAllProjects = (req,res) => {
    Project.find().sort({date:'ascending'})
    .then( allProjects => {
        res.json(allProjects)
    })
    .catch( (err) => {
        console.log('ERROR IN FINDING ALL', err);
        res.status(400).json(err)
    })
}

module.exports.createProject = (req, res) => {
    Project.create(req.body)
    .then(newProject => {
        res.status(201).json(newProject);
    })
    .catch((err) => {
        console.log('ERROR IN CREATING ONE', err)
        res.status(400).json(err)
    })
}

module.exports.oneProject = (req,res) => {
    Project.findOne({_id:req.params._id})
    .then(project => res.json(project))
    .catch((err) => {
        console.log('ERROR IN FINDING ONE', err)
        res.status(400).json(err)
    })
}

module.exports.updateProject = (req, res) => {
    Project.findByIdAndUpdate({_id:req.params._id}, req.body, {new:true, runValidators:true})
    .then(project => res.json(project))
    .catch((err) => {
    console.log('ERROR IN FINDING ONE AND UPDATING', err)
    res.status(400).json(err)
})
}
module.exports.deleteProject = (req, res) => {
    Project.deleteOne({_id:req.params._id})
    .then(deleteProject => res.json(deleteProject))
    .catch((err) => {
        console.log('ERROR IN DELETING ONE', err)
        res.status(400).json(err)
    })
}