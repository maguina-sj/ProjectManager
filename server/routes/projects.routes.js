const ProjectController = require('../controllers/projects.controllers')

module.exports = (app) => {
    app.get('/api/projects', ProjectController.getAllProjects)
    app.post('/api/projects', ProjectController.createProject)
    app.get('/api/projects/:_id', ProjectController.oneProject)
    app.put('/api/projects/:_id', ProjectController.updateProject)
    app.delete('/api/projects/:_id', ProjectController.deleteProject)
}