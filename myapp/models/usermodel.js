var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

mongoose.set('useCreateIndex',true); //warning 메세지 제거 

var userSchema = mongoose.Schema({
    name: {type: String, require:true},
    age: 'number',
    password: {type: String, require:true},
    id:{type: String, require:true, unique:true},
    googleid:'number',
  });

//   //비밀번호 암호화해서 저장
//   userSchema.pre('save', function(next) {
//     const user = this;
//     const saltFactor = 10;
//     bcrypt.genSalt(saltFactor, (err, salt) => { // Salt 생성
//       if (err) return next(err);
   
//       bcrypt.hash(user.password, salt, (err, hash) => {  // Hash생성
//         if (err) return next(err);
//         user.password = hash;  // Hash값 pwd에 저장
//         next();
//       });
//     });
//   });
  
  // compiels our schema into a model
  var User = mongoose.model('User', userSchema);
 
  
  User.create = (newuser, result) => {
      User.find({"id":newuser.id}, function(err,user){
          if(user.length > 0){
            result('already exists', user.id);
            console.log(user);
            return;
          }

          else{
            newuser.save((err, newuser)=>{
    
                try {
                    console.log("done");
                    result(null);
                    return;
                }
    
                catch (err) {// TODO handle the error
                    console.log("error");
                    result(err,newuser.id);
                    return;
                }
            });
          }
        })
    }
    

    
//       })
    
// }

// User.create = (newuser, result) => {
//     let usercheck = User.find({"id":newuser.id});
//     usercheck.getFilter();
//     console.log(usercheck.getFilter());
//     if(usercheck){
//         console.log("mongo: " + User.find({"id":newuser.id}).exec());
//         console.log(newuser.id);
//         result('already exists',newuser.id);
//     }
//     else{
//     newuser.save( (err, newuser)=>{

//         try {
//             console.log("done");
//             result(null); 
//             return;
//         }

//         catch (err) {// TODO handle the error
//             console.log("error");
//             result(err,null);
//             return;
//         }
//         });
 
//     }
// }


    //로그인 session 
    //구글 로그인

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
// })
