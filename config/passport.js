const passport = require('passport')
const bcrypt = require('bcryptjs')
const user = require('../models/user')
const LocalStrategy = require('passport-local').Strategy
module.exports = app => {
  app.use(passport.initialize())
  app.use(passport.session())
  // set LocalStrategy
  passport.use(new LocalStrategy({ usernameField: 'email', passReqToCallback: true }, (req, email, password, done) => {
    user.findOne({ email })
      .then(user => {
        if (!user) {
          return done(null, false, req.flash('warning_msg', 'That email is not registered!'))
        }
        return bcrypt.compare(password, user.password).then(isMatch => {
          if (!isMatch) {
            return done(null, false, req.flash('warning_msg', 'Email or Password incorrect.'))
          }
          return done(null, user)
        })
      })
      .catch(err => done(err, false))
  }))
  // set serializeUser and deserializeUser
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    user.findById(id)
      .lean()
      .then(user => done(null, user))
      .catch(err => done(err, null))
  })
}