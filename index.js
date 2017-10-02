if (!global._babelPolyfill) {
   require('babel-polyfill');
}
require('babel-register');
import app from './server';
import logger from 'winston';

const test = require('./server/index.js');
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  logger.info(`SERVER Listening on ${PORT}`);
});

module.exports = app;
