var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test6', function(req, res, next) {
  res.json({
    test: "OK"
  })
});
router.get('/test2', function(req, res, next) {
  res.status(200).json({
    test2: "OK"
  })
});
router.get('/test3', function(req, res, next) {
  res.status(200).json({
    test3: "OK"
  })
});

module.exports = router;
