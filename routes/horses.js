var express = require('express');
var router = express.Router();
const horse_controlers = require('../controllers/horse');

/* GET home page. */
router.get('/', horse_controlers.horse_view_all_Page);
/* GET detail costume page */
router.get('/detail', horse_controlers.horse_view_one_Page);
/* GET create costume page */
router.get('/create', horse_controlers.horse_create_Page);
/* GET create update page */
router.get('/update', horse_controlers.horse_update_Page);







module.exports = router;