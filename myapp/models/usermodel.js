var mongoose = require('mongoose');



var userSchema = mongoose.Schema({
    name: 'string',
    age: 'number',
    password: 'string',
    id:'string'
  });
  
  // compiels our schema into a model
  var User = mongoose.model('User', userSchema);
  

  User.create = (newuser, result) => {
    newuser.save(function (err, newuser){
        if (err) {// TODO handle the error
            console.log("error");
            result(err,null);
            return;
        }
        else {
            console.log("done");
            result(null);
            return;
        }
        });
 
    }


    // User.findById = (newuser, result)=>{
    //     newuser.find({"id":newuser.id}).toArray(function(err,docs){
    //         if (err){
    //             console.log("not found");
    //             result(err,null);
    //             return;
    //         }
    //         else{
    //             console.log("found!");
    //             result(null);
    //             return;

    //         }
    //     })
    // }

  





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