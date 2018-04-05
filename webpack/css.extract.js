const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  css: function(paths) {
    return {
      module: {
        rules: [
          {
            test: /\.css$/,
            include: paths,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    minimize: true
                  }
                },
                'postcss-loader'
              ]
            })
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin('app.css')
      ]
    };
  },
  stylus: function(paths) {
    return {
      module: {
        rules: [
          {
            test: /\.styl$/,
            include: paths,
            use: ExtractTextPlugin.extract({
              publicPath: '../',
              fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    minimize: true
                  }
                },
                'postcss-loader',
                'stylus-loader'
              ]
            })
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin('app.css')
      ]
    };
  }
};
