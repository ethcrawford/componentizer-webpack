module.exports = {
  dev: function() {
    return {
      module: {
        rules: [
          {
            test: /\.pug$/,
            loader: 'pug-loader'
          }
        ]
      }
    };
  },
  prod: function() {
    return {
      module: {
        rules: [
          {
            test: /\.pug$/,
            loader: 'pug-loader'
          }
        ]
      }
    };
  }
};
