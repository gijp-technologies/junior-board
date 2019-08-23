var client = require ('mongodb').MongoClient;
var dbUrl = process.env.MONGOLAB_URI || "mongodb://localhost/junior";

console.log('db server: ', dbUrl);

client.connect(dbUrl, {}, function (error, db){
    console.log('error: ', error);
    db.listCollections().toArray(function(err, collections) {
        console.log('err: ', err);
        console.log('collections: ', collections);
        db.close();
    })
})