var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  const query = req.query || {};
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);
  res.render('grid', { title: 'Make a grid', query });
});

module.exports = router;
