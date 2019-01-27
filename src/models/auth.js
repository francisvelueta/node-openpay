const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./user')

passport.serializeUser((user, done)=> {
  done(null, user.id);
});

passport.deserializeUser(async (user, done)=> {
  const userIn = await User.findById(id);
  done(null, userIn);
});


passport.use('local-sigin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCall: true
}, (req, email, password, done)=> {}))
