import path from 'path';
import getCSSModuleLocalIdent from 'react-dev-utils/getCSSModuleLocalIdent.js';
import nodeExternals from 'webpack-node-externals';

export default {
  entry: ['regenerator-runtime/runtime', './src/server.js'],

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('build/.server'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },

      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
      },

      {
        test: /\.module\.css$/,
        use: {
          loader: 'css-loader',
          options: {
            modules: {
              getLocalIdent: getCSSModuleLocalIdent,
              exportOnlyLocals: true,
            },
          },
        },
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
