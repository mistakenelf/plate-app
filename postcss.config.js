const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [autoprefixer(), cssnano(), postcssPresetEnv()],
};
