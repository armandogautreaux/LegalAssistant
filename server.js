//DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const secret = process.env.SECRET_OR_KEY;
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
// const cookieSession = require('cookie-session');
// const passport = require('passport');
const passport = require('./passport');
const app = express();

const routes = require('./routes');

const cookieParser = require('cookie-parser');
// const MongoStore = require('connect-mongo')(session);

//PORT
const PORT = process.env.PORT || 8080;

//MIDLEWARE MORGAN
app.use(morgan('dev'));
app.use(cookieParser());
//MIDLEWARE - USING EXPRESS INSTEAD OF 'BODYPARSER'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(
//   cors({
//     credentials: true,

//   }),
// );
app.use(cors());
app.use(cookieParser(secret));
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', req.headers.origin);
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   next();
// });

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
  );
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
});
// app.use(
//   cors({
//     origin: ['http://localhost:8080'],
//     methods: ['GET', 'POST'],
//     credentials: true
//   })
// );

// MONGOOSE CONNECTION
mongoose.connect(
  process.env.MONGO_URI || 'mongodb://localhost/legalassistant',
  { useNewUrlParser: true }
);

// app.use(
//   cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: ['kjdsl;kjdflksjfkls']
//   })
// );
// app.set('trust proxy', 1);
// Express session
// app.use(
//   session({
//     secret: 'thislandlandkdfasdsafaf',
//     cookie: { secure: false, httpOnly: true },
//     store: new MongoStore({
//       mongooseConnection: mongoose.connection,
//       ttl: 2 * 24 * 60 * 60
//     }),
//     resave: false,
//     saveUninitialized: true
//   })
// );

// Passport
app.use(passport.initialize());
// app.use(passport.session()); // calls the deserializeUser

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('cliend/build'));
}

// app.use(function(req, res, next) {
//   res.locals.user = req.user || null;
//   next();
// });
// app.use(cookieParser());

//CIRCULAR DEPENDENCY TO USE ROUTES
app.use(routes);

//INITIALIZE APP
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
