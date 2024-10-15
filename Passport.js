const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user'); // Your user model

module.exports = function(passport) {
    passport.use(new LocalStrategy((username, password, done) => {
        // Implement your strategy here
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
};
