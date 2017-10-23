let fs = require('fs')

// mongo
var MongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/klee'

// use connect method to connect to mongo server
MongoClient.connect(url, function(err, db) {
  console.log('connected to mongo server successfully');
  db.close()
})




let filenames = fs.readdirSync(__dirname + '/../art_works_img/')
// console.log(filenames);
let clay_work = require(__dirname + '/claydb.json')

console.log(clay_work);
