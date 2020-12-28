module.exports = {
  globDirectory: 'build/',
  globPatterns: ['**/*.{html,json,js,css}'],
  swDest: 'build/sw.js',
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 10,
        },
      },
    },
  ],
};
