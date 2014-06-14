var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

/* GET about page. */
router.get('/about', function(req, res) {
    res.render('about');
});

/* GET about page. */
router.get('/contact', function(req, res) {
    res.render('contact');
});

module.exports = router;
