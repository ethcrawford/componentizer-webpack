module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]'
              }
            },
            {
              loader: 'svg-sprite-loader',
              options: {

              }
            },
            {
              loader: 'svgo-loader',
              opions: {
                plugins: [
                  {removeTitle: true},
                  {removeComments: true},
                  {convertColors: {shorthex: false}},
                  {convertPathData: false}
                ]
              }
            }
          ]
        }
      ]
    }
  };
};
