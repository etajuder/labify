/* eslint-disable global-require */
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import Routes from '../routes';

const app = express();


const router = express.Router();

// Log all requests
app.use(morgan('dev'));

// make request body JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // eslint-disable-line
  next();
});

// using express router for routes
Routes(router);

// route every call to the api through the router
app.use('/api', router);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

export default app;
