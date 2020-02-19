const mysql = require("mysql");

const connection = mysql.createConnection({
    host     : 'Host from database',
    user     : 'User from database',
    password : 'Password',
    database : 'Database name'
});

module.exports = connection;
