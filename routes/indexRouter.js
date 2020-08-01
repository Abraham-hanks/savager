var express = require('express');
var router = express.Router();

/* GET home page. */

const indexController = require("../controllers/indexController");

router.get('/', indexController.viewTest);
router.get('/login', indexController.loginView);
router.get('/signup', indexController.signupView);
router.get('/aboutus', indexController.aboutUsView);
router.get('/contact', indexController.contactUsView);
router.get('/leaderboard', indexController.leaderboardView);
router.get('/football', indexController.footballView);
router.get('/random', indexController.sectionsView);
router.get('/country_sec', indexController.countryMemesView);
router.get('/views', indexController.Views);


// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
