const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
    watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
};