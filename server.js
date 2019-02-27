//DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const app = express();
const passport = require('passport');
const session = require('express-session');
const routes = require('./routes');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
// const MongoStore = require('connect-mongo')(session);

//PORT
const PORT = process.env.PORT || 8080;

//MIDLEWARE MORGAN
app.use(morgan('dev'));
// app.use(cookieParser());
//MIDLEWARE - USING EXPRESS INSTEAD OF 'BODYPARSER'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('cliend/build'));
}

// MONGOOSE CONNECTION
mongoose.connect(
  process.env.MONGO_URI || 'mongodb://localhost/legalassistant',
  { useNewUrlParser: true }
);

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true

    // store: new MongoStore({
    //   mongooseConnection: mongoose.connection,
    //   ttl: 2 * 24 * 60 * 60
    // })
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// app.use(cookieParser());
app.use(function(req, res, next) {
  console.log(req.session);
  console.log('//////////');
  console.log(req.user);
  next();
});
//CIRCULAR DEPENDENCY TO USE ROUTES
app.use(routes);

//INITIALIZE APP
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
