const MongoClient = require('mongodb').MongoClient


var db;

MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds153413.mlab.com:53413/votes', (err, database) => {
    if (err) return console.log(err)
    db = database;
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
});

module.exports = db;