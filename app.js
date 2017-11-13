const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const passport = require('passport');

// Passport
require('./config/passport')(passport);

// Routes
const auth = require('./routes/auth');

const app = express();

// Connect to mongoose

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Index Route
app.get('/', (req,res)=>{
  res.render('index');
})

// About Route
app.get('/about', (req,res)=>{
  res.render('about');
})

// Use Routes
app.use('/auth', auth);

const port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log(`Server started on ${port}.`);
});