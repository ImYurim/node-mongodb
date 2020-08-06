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


    User.create(user,(err,user)=>{
        if(err){
            console.error(err);
            res.status(404).send({
                message:"you are already member"
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