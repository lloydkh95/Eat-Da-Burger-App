// Pull in required dependencies
var mysql = require('mysql');

// create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // DB is local on localhost
    connection = mysql.createConnection({
        port: 3306,
        host: 'ctgplw90pifdso61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'p8r6uvdd86lqkxbb',
        password: 'go4fjyw2bgko33w2',
        database: 'zaxvr1ufxz6y1fsx'
    })
};

// make the connection to MySQL
connection.connect(function(err) {
    if (err) {
        console.error('ERROR: MySQL connection error --' + err.stack + '\n\n');
        return;
    }
    console.log('Connected to Mysql database as id ' + connection.threadID + '\n\n');
});

// export connection for ORM use
module.exports = connection;