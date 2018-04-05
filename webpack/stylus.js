module.exports = {
  dev: function(paths) {
    return {
      module: {
        rules: [
          {
            test: /\.styl$/,
            include: paths,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      }
    };
  },
  prod: function(paths) {
    return {
      module: {
        rules: [
          {
            test: /\.styl$/,
            include: paths,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              },
              'postcss-loader',
              'stylus-loader'
            ]
          }
        ]
      }
    };
  }
};
