const User = require("../models/usermodel");
var db = require('../db');

exports.renderclassroom = (req,res)=>{
    res.render("class/myclassroom");
}

