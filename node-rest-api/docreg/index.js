const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const database = require('./db/database');

// MongoDB connection 
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  
}).then(() => {
  console.log('Database connected ')
},
  error => {
    console.log('Database not connected : ' + error)
  }
)

const docregRoute = require('./routers/docreg.route')

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false

}));
app.use(cors());

app.use('/api', docregRoute)

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log('PORT connected: ' + port)
})

app.use(function (error, res,) {
  console.error(error.message);
  if (!error.statusCode) error.statusCode = 500;
  res.status(error.statusCode).send(error.message);
});
