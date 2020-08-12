const User = require("../models/usermodel");
var db = require('../db');
var passport = require('../models/passport');


exports.renderjoinform = (req,res)=>{
    res.render("join/joinform");
}

exports.createuser=(req,res)=>{


    var user = new User({
        name : req.body.username,
        password : req.body.userpassword,
        id : req.body.userid,
        age : req.body.userage
    });
    console.log("this is request.");
    console.log(user);



    User.create(user,(err,data)=>{

        if(err){
            console.error(err);
            res.status(404).send({
                message: err 
            });                 
        }

        else{
            res.status(300).send({
                message:"register success"
            });
        }


    });


};


exports.renderloginform=(req,res)=>{
    res.render("join/loginform");
}


// exports.userlogin=(req,res,next)=>{
//     if(req.body.id.length===0 || req.body.password.length===0){

//         res.redirect('/loginform');
//     }else{
//         next();
//     }
// }, passport.authenticate('local-login',{
//     successRedirect : '/classroom',
//     failureRedirect: '/loginform',
//     failureFlash: true
// });



// exports.userlogin = (req,res)=>{
   
//     var user = new User();
//     user.password = req.body.userpassword;
//     user.id = req.body.userid;



//     User.findById(user,(err,user)=>{
//         if(err){
//             console.error(err);
//             res.status(404).send({
//                 message:"you are not a member"
//             });
//         }
//         else{
//             res.status(300).send({
//                 message:"find success"
//             });
//         }

//     });
   
// }