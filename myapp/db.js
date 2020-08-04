var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var app = require('./app');

mongoose.Promise = global.Promise; // mongoDB 버전 4.11 이상부터 해주어야 에러 안남
mongoose.connect('mongodb://localhost:27017/mydb',{useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
// we get notified if error occurs
db.on('error', console.error.bind(console, 'connection error:'));
// executed when the connection opens
db.once('open', function  () {
      console.log("open");
});

//db schema
// creates DB schema
// var userSchema = mongoose.Schema({
//   username: 'string',
//   age: 'number'
// });

// // compiels our schema into a model
// var User = mongoose.model('User', userSchema);

// var user1 = new User({ username: 'gchoi', age: 30 });
// var user2 = new User({ username: 'jmpark', age: 29 });
 

// // save user1
// user1.save(function (err, user1) {
// if (err) // TODO handle the error
//     console.log("error");
// });

// // save user2
// user2.save(function (err, user2) {
// if (err) // TODO handle the error
//     console.log("error");
// });


//mongo
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

