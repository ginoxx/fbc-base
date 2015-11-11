/* global AT */
var express           =     require('express')
  , passport          =     require('passport')
  , util              =     require('util')
  , FacebookStrategy  =     require('passport-facebook').Strategy
  , session           =     require('express-session')
  , cookieParser      =     require('cookie-parser')
  , bodyParser        =     require('body-parser')
  , config            =     require('./configuration/config')
  ,request =                require('request')
  , app               =     express();


// Passport session setup.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Use the FacebookStrategy within Passport.

options = {
    clientID: config.facebook_api_key,
    clientSecret: config.facebook_api_secret,
    callbackURL: config.callback_url
};

/*
passport.use(
    new FacebookStrategy(
        options,
        function(accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
      //Check whether the User exists or not using profile.id
      
        { facebookId: profile.id }
                function (err, result) {
                    if(result) {
                        result.access_token = accessToken;
                        console.log('AT: '+result.access_token)
                        result.save(function(err, doc) {
                            done(err, doc);
                        });
                    } else {
                        done(err, result);
                    }
                }
      //Further DB code.
 */     
/*
passport.use(
    new FacebookStrategy(
        options,
        function(accessToken, refreshToken, profile, done) {
            User.findOrCreate(
                { facebookId: profile.id },
                function (err, result) {
                    if(result) {
                        result.access_token = accessToken;
                        result.save(function(err, doc) {
                            done(err, doc);
                        });
                    } else {
                        done(err, result);
                    }
                }
            );
        }
    )
);
/*
function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      //Check whether the User exists or not using profile.id
      console.log('ID: '+profile.id);
        { facebookId: profile.id },
                function (err, result) {
                    if(result) {
                        result.access_token = accessToken;
                        console.log('AT: '+result.access_token)
                        result.save(function(err, doc) {
                            done(err, doc);
                        });
                    } else {
                        done(err, result);
                    }
                }
      //Further DB code.
      return done(null, profile);
    });
  }

*/


passport.use(new FacebookStrategy({
    clientID: config.facebook_api_key,
    clientSecret:config.facebook_api_secret ,
    callbackURL: config.callback_url
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      //Check whether the User exists or not using profile.id
      console.log('ID: '+profile.id);
      console.log('AT: '+accessToken);
      
      AT = accessToken;
      console.log('ATC :'+AT);
      return done(null, profile);
    });
  }
));

/*
var FacebookTokenStrategy = require('passport-facebook-token');

passport.use('passport-facebook-token',new FacebookTokenStrategy({
    clientID: config.facebook_api_key,
    clientSecret: config.facebook_api_secret,
    callbackURL: config.callback_url
  }, function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({facebookId: profile.id}, function (error, user) {
      return done(error, user);
    });
  }
));
*/
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'keyboard cat', key: 'sid'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  //console.log('AT:'+req.Token)
  res.render('index', { user: req.user });
});

app.get('/account', ensureAuthenticated, function(req, res){ 
  // ************* ONLY FOR TEST 
 
console.log('AAAAA: '+AT);   
  
var url = 'https://graph.facebook.com/v2.5/me?access_token='+AT;
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var fbResponse = JSON.parse(body);
    console.log("Got a response: ", fbResponse);
  } else {
    console.log("Got an error: ", error, ", status code: ", response.statusCode);
  }
});
 

 // *********************************** 
  
  res.render('account', { user: req.user });
  //res.send('closing..');
  server.close();
  console.log('Server closing....');
});


app.get(
  '/auth/facebook',
    passport.authenticate('facebook', { session: false, scope: ['public_profile','user_friends'] })
);

//app.get('/auth/facebook', passport.authenticate('facebook',{scope:'email'}));

/*
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { session: false, failureRedirect: "/login" }),
  function(req, res) {
    console.log(req.user.access_token);
    res.redirect("/account?access_token=" + req.user.access_token);
  }
);
/*

*/
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect : '/account', failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });
  
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

var server = app.listen(3000);
console.log('Life goes on');
//ui.something


//remember to export AT if needed
/*
module.exports = {
    FOO: FOO
};
*/