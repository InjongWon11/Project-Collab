var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: String,
    description: String,
    url: String,
    project_start_date: Date,
    skills_required: [String],
    skills_prefered: [String],
    team: [
        {
            name: String,
            userID: String,
            type: String,
            photo_url: String
        }
    ]
});

mongoose.model("Project", ProjectSchema);
