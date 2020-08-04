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



app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

