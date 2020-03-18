var path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, '../lib/DEV.ts'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  devServer: {
    open: true,
    port: 9000,
    noInfo: true,
    host: '0.0.0.0',
    publicPath: '/dist',
    contentBase: path.join(__dirname, '../public'),
    historyApiFallback: {
      index: 'index.html',
    }
  },
  plugins: [],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins: [
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-class-properties',
          ],
        },
        test: /\.(j|t)sx?$/,
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: path.resolve(__dirname, './')
              }
            },
          }
        ]
        // exclude: /node_modules/,
      }, {
        test: /\.(png|jpg|jpeg|gif|webp)$/,
        use: [{ loader: 'url-loader' }]
      }
    ]
  }
}