//The configuration file for express
//Modules
var express = require("express"),
    path = require("path"),
    keys = require("./keys"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    session = require("express-session");

//export our own wrapped version of express
module.exports = function() {
    var app = express(); //default express

    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.use(
        bodyParser.urlencoded({
            extended: true
        })
    );
    app.use(bodyParser.json({ type: "application/json" }));

    app.use(
        session({
            secret: "dansnothot",
            saveUninitialized: false,
            resave: true,
            cookie: { maxAge: null }
        })
    );

    app.use(passport.initialize());
    app.use(passport.session());

    require("../routes/user_route")(app);
    require("../routes/project_route")(app);
    require("../routes/default_route")(app);

    return app;
};
