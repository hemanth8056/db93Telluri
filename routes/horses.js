var express = require('express');
var router = express.Router();
const horse_controlers = require('../controllers/horse');

/* GET home page. */
router.get('/', horse_controlers.horse_view_all_Page);
module.exports = router;