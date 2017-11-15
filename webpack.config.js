import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default webpackConfig;

function webpackConfig(options) {
  const isBuild = !!options.build;
  const isDev = !!options.dev;
  const watch = !!options.watch;
  const isDevBuild =isBuild && isDev;
  const isTest = !!options.test;
  const exclude = /node_modules/;
  const context = __dirname + '/src';

  const config = {
    context,
    entry: {
      app: [
        './index.js',
        './app.css'
      ]
    },
    watch,
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          use: ['babel-loader'],
          exclude
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  // ident: 'postcss',
                  plugins: (loader) => postCssPlugins()
                }
              }
            ]
          })
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
          loader: 'file-loader',
          exclude
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css'),
    ],
    resolve: {
      alias: {}
    }
  };

  function postCssPlugins() {
    const plugins = [
      require('postcss-import')({ root: context }),
      require('postcss-cssnext')({ browsers: [ 'last 2 versions' ] })
    ];

    const prodPlugins = [
      require('cssnano')()
    ];

    return isDevBuild
      ? plugins
      : [...plugins, ...prodPlugins]
  }

  return config;
}
