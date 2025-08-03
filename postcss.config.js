module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['> 1%', 'last 2 versions', 'not dead', 'not ie 11']
    }),
    require('cssnano')({
      preset: 'default'
    })
  ]
};