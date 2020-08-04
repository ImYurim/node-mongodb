var express = require('express');
var router = express.Router();
var controller = require('../../controllers/joincontroller');

/* main*/
router.get('/', controller.renderjoinform);

module.exports = router;
