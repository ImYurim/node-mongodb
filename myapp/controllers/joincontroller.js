const User = require("../models/usermodel");


exports.renderjoinform = (req,res)=>{
    res.render("join/joinform");
}

exports.createuser=(req,res)=>{
    var user = new User();
    user.name = req.body.username;
    user.password = req.body.userpassword;
    user.id = req.body.userid;
    user.age = req.body.userage;

    user.save(function(err){
        if(err){
            console.error(err);
            res.json({result:0});
            return;
        }
        res.json({result:1});
    });

    console.log('data : '+req.body.username+req.body.userpassword+req.body.userage + req.body.userid);

};