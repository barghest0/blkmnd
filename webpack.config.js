import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = path.resolve();
const PATHS = {
  src: path.join(__dirname, './src'),
  public: path.join(__dirname, './public'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets',
};

const config = {
  entry: ['@babel/polyfill', `${PATHS.src}/index.tsx`],

  output: {
    filename: 'index.js',
    path: PATHS.dist,
    clean: true,
    publicPath: '/',
  },

  devtool: 'source-map',

  externals: {
    path: PATHS,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],

              '@babel/preset-typescript',
            ],
            plugins: [
              [
                'styled-components',
                {
                  displayName: true,
                  fileName: false,
                },
              ],
            ],
          },
        },
      },

      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[name]__[local]-[hash:base64:5]',
              },
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: `${PATHS.assets}/images/[name][ext]`,
        },
      },

      {
        test: /\.mp3$/,
        type: 'asset/resource',
        generator: {
          filename: `${PATHS.assets}/audio/[name][ext]`,
        },
      },

      {
        test: /\.ico$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]',
        },
      },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        issuer: /\.(ts|js)x?$/,
      },

      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: `${PATHS.assets}/fonts/[name][ext]`,
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATHS.public}/index.html`,
      // favicon: `${PATHS.public}/favicon.ico`,
    }),
    new MiniCssExtractPlugin({
      filename: `css/[name].css`,
    }),
  ],
};

export default config;
