var express = require('express');
var router = express.Router();
var controller = require('../../controllers/myclassroomcontroller');

/* main*/
router.get('/', controller.renderclassroom);


module.exports = router;
