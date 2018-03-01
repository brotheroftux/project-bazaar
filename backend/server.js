const express        = require('express');
const mongoose       = require('mongoose');
//const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
//const db             = require('./config/db');
const app            = express();
const port = 8000;

app.use(express.static('stat'));
app.use(bodyParser.urlencoded({ extended: true }));

database = mongoose.createConnection('mongodb://localhost/hakaton_hr');

userSchema = new mongoose.Schema( {
    type_user: { type: Number, default: 1},
    first_name: { type: String},
    last_name: { type: String },
    email: {type: String},
    token: {type: String, default: ""},
    magic_link: {type: String, default: ""}
});

user = database.model("user", userSchema)

newUser = new user({
    first_name: "Кирилл",
    last_name: "Постнов",
    email: "kadeat@gmail.com"
  })

database.on("error", console.error.bind(console, "connection error:"));
database.once("open", () => {
  require('./src/app/routes')(app, {});
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});
