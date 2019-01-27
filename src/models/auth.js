const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./user')

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done)=> {
  const user = await User.findById(id);
  done(null, user);
});


passport.use('local-sigin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done)=> {
  const user = await User.findOne({ email: email, password: password });
  if(!user) {
    return done(null, false, req.flash('signinMessage', 'Datos Incorrectos'));
  }

  done(null, user);
}));
