const express = require('express');
const router = express.Router();
const Openpay = require('openpay');
const passport = require('passport');
const openpay = new Openpay('muok4aq3ozexd874ii7e', 'sk_a2be3788adeb4b6ea387e74bf6d16976');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/welcome', (req, res, next) => {
  // openpay library
openpay.customers.create(req.body, function(error, body) {
    if(error) {
      console.log(error);
    }
    if(body) {
      res.render('welcome')
    }
});
});

router.get('/signin', (req, res, next) => {
res.render('signin');
});

router.post('/signin', passport.authenticate('local-sigin', {
  successRedirect: '/dashboard',
  failureRedirect: '/signin',
  passReqToCallback: true
}));


router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/signin');
});

router.get('/welcome', (req, res, next) => {

  res.render('welcome');
});
router.get('/dashboard', isAuthenticated,   (req, res, next) => {
   openpay.customers.list((error, list) => {
    res.render('dashboard',  {datas: list});
});


});

function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/signin');
}


module.exports = router;
