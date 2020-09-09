const database = require('./db.js');
const restify = require('restify');
const  port = process.env.PORT || 3000;



exports.connect = (restify) => {
    // creating server
    var server = restify.createServer({
       name:`restify-mongoose-connect`,
       versoion:`1.0.0`
   });

   server.listen(port, () => {
        database.connect();
    })
}