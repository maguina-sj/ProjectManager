const mongoose = require('mongoose')

const ProjectsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [3, "Project name has to be at least 3 characters"]
        },
        date: {
            type: Date,
            required: [true, "The project needs a due date"]
        },
        status: {
            type: String,
        }
    }, {timestamps: true}

)
const Project = mongoose.model('Project', ProjectsSchema);

module.exports = Project;
