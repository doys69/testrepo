var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test7', function(req, res, next) {
  res.json({
    test: "OK"
  })
});
router.get('/test2', function(req, res, next) {
  res.status(200).json({
    test: "OK"
  })
});
router.get('/test3', function(req, res, next) {
  res.status(200).json({
    test: "OK"
  })
});

module.exports = router;
