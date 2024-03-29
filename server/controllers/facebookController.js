const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const configAuth = require('../config/auth');
const User = require("../schema/user");
const router = require("express").Router();

// Serialize user into the sessions
passport.serializeUser(function(user, done) {
		done(null, user.id);
});

// Deserialize user from the sessions
passport.deserializeUser(function(id, done) {
		User.findById(id, function (err, user) {
	    done(err, user);
	  });
});


passport.use(new FacebookStrategy({
		clientID        : configAuth.facebookAuth.clientID,
		clientSecret    : configAuth.facebookAuth.clientSecret,
		callbackURL     : configAuth.facebookAuth.callbackURL,
		profileFields   : configAuth.facebookAuth.profileFields,
	}, function(token, refreshToken, profile, done) {
        // asynchronous
        process.nextTick(function() {

            // find the user in the database based on their facebook id
            User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err)
                    return done(err);

                // if the user is found, then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user found with that facebook id, create them
                    var newUser            = new User();

                    // set all of the facebook information in our user model
                    newUser.facebook.id    = profile.id; // set the users facebook id
                    newUser.facebook.token = token; // we will save the token that facebook provides to the user
                    newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                    newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                    // save our user to the database
                    newUser.save(function(err) {
                        if (err)
                            throw err;

                        // if successful, return the new user
                        return done(null, newUser);
                    });
                }

            });
        });

    }));


router.get('/', passport.authenticate('facebook', { scope : ['public_profile', 'email'] }));

// handle the callback after facebook has authenticated the user
router.get('/callback',
	passport.authenticate('facebook', {
				successRedirect : '/',
				failureRedirect : '/'
	}));

router.get('/logout', function(req, res){
	  console.log('logging out');
	  req.logout();
	  res.redirect('/');
});

router.get('/isAuthenticated', function(req, res){
		res.json({isAuthenticated: req.isAuthenticated()});
});


module.exports = {
	   router,
	   passport
	}
