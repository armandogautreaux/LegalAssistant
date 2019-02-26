//DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(cors());
//PORT
const PORT = process.env.PORT || 8080;

//MIDLEWARE - USING EXPRESS INSTEAD OF 'BODYPARSER'
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//CIRCULAR DEPENDENCY TO USE ROUTES
app.use(routes);

//INITIALIZE APP
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
