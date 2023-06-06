const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const { User } = '../models'
const bcrypt = require('bcrypt')
//passport local strategy to authenticate with username and passport
passport.use(new LocalStrategy( async (username, password, done) => {
    const user = await User.findOne({ where:{ username} });
    if(!user) {
        return done(null, false, {message: 'Incorrect Username.' });
    }
    const result = await bcrypt.compare(password, user.password);
    if(!result) {
        return done(null, false, {message: 'Incorrect Password.' });
    }
    return done(null, user);
}
));

//setting up serialization and deserialization
passport.serializeUser((user, done) => {
    done(null, user.id)
});
passport.deserializeUser(async (id, done) => {
    const user = await User.findByPk(id);
    done(null, user)
});