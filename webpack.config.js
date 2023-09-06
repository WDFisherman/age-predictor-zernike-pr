const path = require('path');

module.exports = {
  entry: './static/index.js',
  output: {
    path: path.resolve(__dirname, 'static/dist'),
    filename: 'bundle.js',
  },
};