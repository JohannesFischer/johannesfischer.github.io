require('babel-core/register');

module.exports = require('./webpack.config').default({
  build: true,
  dev: false
});
