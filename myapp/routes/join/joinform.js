var express = require('express');
var router = express.Router();
var controller = require('../../controllers/joincontroller');

/* main*/
router.get('/', controller.renderjoinform);
router.post('/create',controller.createuser);
router.get('/loginform',controller.renderloginform);
// router.get('/login',controller.userlogin);

module.exports = router;
