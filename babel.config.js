module.exports = {
  plugins: [
    'svelvet/plugins/babel.js',
    [
      'transform-inline-environment-variables',
      {
        include: ['NODE_ENV'],
      },
    ],
  ],
};
