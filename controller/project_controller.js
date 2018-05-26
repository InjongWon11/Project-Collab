//Controller handling all CRUD operations on Projects
var Project = require("mongoose").model("Project");

//Creates new Project
exports.create = function(req, res, next) {
    //Creates a new Project from the req.body
    var Project = new Project(req.body);
    //Stores this new item in the database
    Project.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(Project);
        }
    });
};

//Lists all Projects in JSON format
exports.list = function(req, res, next) {
    //Looks for all items satisfying the given conditions in the database
    Project.find({}, function(err, Projects) {
        if (err) {
            return next(err);
        } else {
            res.json(Projects);
        }
    });
};

//Finds a particular Project using their unique id
exports.find = function(req, res, next, id) {
    //Looks for first item satisfying the given conditions in the database
    Project.findOne({ _id: id }, function(err, Project) {
        if (err) {
            return next(err);
        } else {
            //Sets req.Project to the found Project
            req.Project = Project;
            next();
        }
    });
};

//Reads a found Project in JSON format
exports.read = function(req, res, next) {
    res.json(req.Project);
};

//Updates a found Project with new fields
exports.update = function(req, res, next) {
    Project.findByIdAndUpdate(req.Project.id, req.body, function(err, Project) {
        //Finds an item in the database according to a given id, takes in a replacement JSON body, and performs the update
        if (err) {
            return next(err);
        } else {
            res.json(Project);
        }
    });
};

//Deletes the Project that was found
exports.delete = function(req, res, next) {
    //Removes an item in the database
    req.Project.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.send("Project Deleted");
        }
    });
};
