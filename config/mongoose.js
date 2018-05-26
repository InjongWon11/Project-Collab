var mongoose = require("mongoose");

module.exports = function() {
    var db = mongoose.connect("mongodb://localhost:3001/mydb");
    require("../model/user_model");
    require("../model/project_model");
    return db;
};
