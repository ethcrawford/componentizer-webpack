module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(xml|ico|webmanifest)$/,
          loader: 'file-loader',
          options: {
            name: 'files/[name].[ext]'
          }
        }
      ]
    }
  };
};
