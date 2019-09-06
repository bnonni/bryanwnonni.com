const MongoClient = require("mongodb").MongoClient;
const MongoURI = "mongodb://localhost:27017/db_name"
var _db;

module.exports = {
 connectToServer: function (callback) {
  MongoClient.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
   _db = client.db("db_name");
   return callback(err);
  });
 },

 getDb: function () {
  return _db;
 }
};