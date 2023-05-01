import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import DotEnv from 'dotenv-webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = env => {
  const publicPath = env.NODE_ENV === 'local' ? '/' : '/';
  return {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'docs'),
      assetModuleFilename: '[name][ext]',
      publicPath: publicPath,
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.tsx$/, use: 'ts-loader', exclude: /node_modules/ },
        {
          test: /\.s(a|c)ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
        },
      ],
    },
    devServer: {
      hot: true,
      open: true,
      port: 8000,
      historyApiFallback: true,
      static: [
        { directory: path.resolve('src'), watch: true },
        { directory: path.resolve('docs'), watch: true },
      ],
    },
    plugins: [
      new DotEnv(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: './index.html',
        inject: 'body',
        publicPath: publicPath,
        scriptLoading: 'blocking',
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/python/bokeh/ExperienceChart.html', to: 'ExperienceChart.html' }
        ]
      })
    ],
    optimization: {
      minimize: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx'],
      alias: {
        'prop-types$': path.resolve(__dirname, 'node_modules/airbnb-prop-types/index.js'),
      },
    },
  };
};