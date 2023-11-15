if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);


const mongoose = require('mongoose');
mongoose.connect(process.env.USER_DATABASE_URL);

const userDbConnection = mongoose.connection;

userDbConnection.on('error', (err) => {
  console.error('error connectin to user_database', err);
})
userDbConnection.once('connected', () => {
  console.log('Connected to user_database successfully ');
})

