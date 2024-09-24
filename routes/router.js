const express = require('express');
const router = express.Router();
const hp = require('../controller/Control')


router.get('/', hp.jem)
module.exports = router;