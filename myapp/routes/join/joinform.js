var express = require('express');
var router = express.Router();
var controller = require('../../controllers/joincontroller');

/* GET home */
router.get('/', controller.renderjoinform);

module.exports = router;
