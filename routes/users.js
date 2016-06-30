var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: './uploads' });

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

router.post('/register', upload.single('profileimage'), (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    if (req.file) {
        console.log(req.file);
        console.log('uploading File...');
        var profileimage = req.file.filename;
    } else {
        console.log('No file Uploaded');
        var profileimage = 'noimage.jpg';
    }

    //Form Validator
    req.checkBody('name', 'Name field is required').notEmpty();
    req.checkBody('email', 'Email field is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'username field is required').notEmpty();
    req.checkBody('password', 'password field is required').notEmpty();
    req.checkBody('password2', 'passwords do not match').equals(req.body.password);

    //Errors
    var errors = req.validationErrors();
    if (errors) {
        console.log('Errors');
        res.render('register.html', {
            title: 'Register',
            errors: errors
        });
    } else {
        console.log('No errors found');
    }

});



module.exports = router;
