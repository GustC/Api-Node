const mysql = require("mysql");

const connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-04.cleardb.net',
    user     : 'bc7140e65cbe19',
    password : 'd3c9cdbf',
    database : 'heroku_de385132bdea338'
});

module.exports = connection;