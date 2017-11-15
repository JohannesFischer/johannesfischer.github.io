require('babel-core/register');

module.exports = require('./webpack.config').default({
  build: true,
  dev: true,
  watch: true
});
