//DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const UserRoutes = require('./routes/users.js');
const app = express();

//PORT
const PORT = process.env.PORT || 8080;

//MIDLEWARE - USING EXPRESS INSTEAD OF 'BODYPARSER'
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//STATIC FOLDER
app.use(express.static('client/public'));

//CIRCULAR DEPENDENCY TO USE ROUTES
app.use(UserRoutes);

// MONGOOSE CONNECTION
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost/legalassistant', {
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//INITIALIZE APP
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
