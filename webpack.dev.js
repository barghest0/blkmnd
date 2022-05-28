import { merge } from 'webpack-merge';
import baseConfig from './webpack.config.js';

const devConfig = merge(baseConfig, {
  mode: 'development',

  devServer: {
    static: {
      directory: baseConfig.externals.path.dist,
      watch: true,
    },
    hot: true,
    port: 8000,
    open: false,
    historyApiFallback: true,
  },

  output: {
    filename: 'index.js',
    path: baseConfig.externals.path.dist,
    clean: true,
    publicPath: '/',
  },
});

export default devConfig;
