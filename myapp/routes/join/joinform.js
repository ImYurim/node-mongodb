var express = require('express');
var router = express.Router();
var controller = require('../../controllers/joincontroller');
var passport = require('../../models/passport');

/* main*/
router.get('/', controller.renderjoinform);
router.post('/create',controller.createuser);
router.get('/loginform',controller.renderloginform);
router.post('/login',passport.authenticate('local-login',{
  successRedirect : '/classroom',
  failureRedirect: '/loginform',
  failureFlash: true
})
);
// router.get('/login',controller.userlogin);

module.exports = router;
