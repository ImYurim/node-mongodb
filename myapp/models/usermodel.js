var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
    username: 'string',
    age: 'number'
  });
  
  // compiels our schema into a model
  var User = mongoose.model('User', userSchema);
  

  module.exports = User;


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