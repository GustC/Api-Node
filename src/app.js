const express = require('express');
const index = require("./routes/index")
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', index);
module.exports = app;