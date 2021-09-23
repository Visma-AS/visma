module.exports = (api) => ({
  plugins: [['formatjs', { removeDefaultMessage: api.env('production') }]],
});
