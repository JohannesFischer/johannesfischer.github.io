import path from 'path';
import webpack from 'webpack';
import rucksack from 'rucksack-css';
import cssnano from 'cssnano';
import mixins from 'postcss-mixins';
import cssnext from 'postcss-cssnext';
import postcssImport from 'postcss-import';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import scss from 'postcss-scss';

export default webpackConfig;

function webpackConfig(options) {
  const isBuild = !!options.build;
  const isDev = !!options.dev;
  const isDevBuild = (isBuild && isDev);
  const isTest = !!options.test;
  const exclude = /node_modules/;
  const config = {
    context: __dirname + '/src',
    entry: {
      app: [
        './index.js',
        './style.css'
      ]
    },
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
            use: [
              {
                loader: 'css-loader',
                options: { importLoaders: 1 },
              },
              {
                loader: 'postcss-loader',
                options: { parser: scss }
              }
            ],
          }),
        },
        {
          test: /\.(png|jpg|jpeg|gif|GIF|svg|woff|woff2|ttf|eot)$/,
          loader: 'file',
          exclude
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].bundle.css'),
    ],
    resolve: {
      alias: {}
    }
  };

  // config.plugins = createPlugins();

  function postcss(webp) {
    const cssnanoOpt = { discardUnused: false, zindex: false };
    const rucksackOpt = { autoprefixer: true };
    const devPlugins = [
      postcssImport({ addDependencyTo: webp }),
      mixins,
      rucksack(rucksackOpt),
      cssnext
    ];
    const prodPlugins = [cssnano(cssnanoOpt)];

    return isBuild ? [...devPlugins, ...prodPlugins] : devPlugins;
  }

  function createPlugins() {
    const devPlugins = [
      new ExtractTextPlugin('bundle.css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'style',
        filename: '[name].js'
      })
    ];
    const buildPlugins = [];

    return isBuild ? [...devPlugins, ...buildPlugins] : devPlugins;
  }

  return config;
}
