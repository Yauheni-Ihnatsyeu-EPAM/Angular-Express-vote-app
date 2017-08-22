const MongoClient = require('mongodb').MongoClient

var db;

MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds153413.mlab.com:53413/votes', (err, database) => {
    if (err) return console.log(err)
    db = database;
});

module.exports = db;