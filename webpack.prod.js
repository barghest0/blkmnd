import { merge } from 'webpack-merge';

import baseConfig from './webpack.config.js';

const prodConfig = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: 'index.js',
    path: baseConfig.externals.path.dist,
    clean: true,
    publicPath: './',
  },
});

export default prodConfig;
