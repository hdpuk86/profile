var express = require('express');
var router = new express.Router();

router.use('/portfolio', require('./portfolio'));
module.exports = router;
