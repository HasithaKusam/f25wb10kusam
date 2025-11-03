var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('gardenplots', { title: 'Search Results: GardenPlots' });
});

module.exports = router;
