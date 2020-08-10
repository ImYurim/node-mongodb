const User = require("../models/usermodel");
var db = require('../db');

exports.renderjoinform = (req,res)=>{
    res.render("join/joinform");
}

exports.createuser=(req,res)=>{

    var user = new User();
    user.name = req.body.username;
    user.password = req.body.userpassword;
    user.id = req.body.userid;
    user.age = req.body.userage;



    //여기에 아이디 비밀번호 등등 유효성 검사

    User.create(user,(err,user)=>{
        if(err){
            console.error(err);
            if(user){
                res.status(404).send({
                    message:  user.id + err
                });
            }else{
                res.status(404).send({
                    message: err
                });                
            }

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