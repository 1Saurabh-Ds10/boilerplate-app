const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

require('dotenv').config();

const config = require('./config');




const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});
/* app.use(
  jwt({ secret: config.jwt.secret }).unless({
          path: [
                  '/',
                  '/auth/signup',
                  '/auth/login',
                  '/auth/forgot-password',
                  '/auth/reset-password',
          ],
  }),
);

app..use((err, req, res, next) => {
        if (err.name === 'UnauthorizedError') {
                res.status(401).send('Missing authentication credentials.');
        }
});
*/



app.listen(config.port, err => {
  if (err) {
     process.exit(1);
  }
  require('./utils/db');

  fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
           require('./routes/' + file)(app);
  });

  console.log(`Appis running on ${config.port}`);

});


module.exports = app;