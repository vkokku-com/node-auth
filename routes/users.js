var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/register', (req, res, next) => {
    res.render('register.html', { title: 'Register' });
});
router.get('/login', (req, res, next) => {
    res.render('login.html', { title: 'Please Sign in' });
});
router.get('/logout', (req, res, next) => {
    res.redirect('/login');
});

module.exports = router;
