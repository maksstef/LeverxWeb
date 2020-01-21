var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var mainRoutes = require('./server/routes/main');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/api/', mainRoutes);

mongoose.connect('mongodb://localhost/fridges')
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World!',
  });
});

app.listen(4040, () => {
  console.log(`Server is running on port 4040`);
});