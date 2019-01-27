const express = require('express');
const router = express.Router();
const Openpay = require('openpay');

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

router.post('/signin', (req, res, next) => {
res.render('dashboard');
});


module.exports = router;
