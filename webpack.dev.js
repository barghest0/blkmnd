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
    port: 8080,
    open: false,
    historyApiFallback: true,
  },
});

export default devConfig;