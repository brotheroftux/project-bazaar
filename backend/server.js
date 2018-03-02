const express        = require('express');
const mongoose       = require('mongoose');
//const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
//const db             = require('./config/db');
const data_projects  = require('./projects.js');
const data_roles      = require('./roles.js');
const app            = express();
const port = 8000;
const fallback = require('express-history-api-fallback');
const root = '../frontend/build';

app.use(express.static(root));
//app.use(fallback('index.html', { root }))
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

database = mongoose.createConnection('mongodb://localhost/hakaton_hr');

userSchema = new mongoose.Schema( {
    type_user: { type: Number, default: 1},
    first_name: { type: String },
    last_name: { type: String },
    patronymic: { type: String },
    email: {type: String},
    user_photo: {},
    education : {
        university: { type: String },
		qualification: { type: String },
		degree: { type: String },
		experience: { type: Number, default: 1 }
    },
    work: {
		company: { type: String },
		position: { type: String }
	},
    interests: {type: Array},
	skills: {type: Array},
    projects: {type: Array},
    about: {type: String},
    token: {type: String, default: ""},
    magic_link: {type: String, default: ""},
    token_date: {type: Date, default: Date.now()}
})

projectSchema = new mongoose.Schema( {
    type_project: { type: String },
    project_photo: { type: String, default: "https://pbs.twimg.com/profile_images/949374088249671680/MuxDEZpD_400x400.jpg" },
    title: { type: String },
    id_creator: {type: mongoose.Schema.ObjectId},
    description_project: { type: String },
    date_start: {type: String},
    date_finish: {type: String},
    site: {type: String},
    results: {type: String},
    resources: {type: String},
    roles: {type: Array}
})

roleSchema = new mongoose.Schema( {
    id_project: { type: mongoose.Schema.ObjectId},
    title: { type: String },
    status: {
        value: { type: Number },
        id_user: { type: Number }
    },
    description: { type: String },
    awards: {type: String},
    demands: {type: String},
    interests: {type: Array},
	skills: {type: Array}
})

user = database.model("user", userSchema)
project = database.model("project", projectSchema)
role = database.model("role", roleSchema)

database.on("error", console.error.bind(console, "connection error:"));
database.once("open", () => {
  require('./src/app/routes')(app, {});
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});
