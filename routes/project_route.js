var project = require("../controller/project_controller");

/*
Routes URLs to different REST methods based on method that is called in reducer files.
*/

module.exports = function(app) {
    app.route("/project")
        .post(project.create)
        .get(project.list);
    app.route("/project/:project_id")
        .get(project.read)
        .put(project.update)
        .delete(project.delete);
    app.param("project_id", project.find);
};
