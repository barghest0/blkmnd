import { merge } from 'webpack-merge';

import baseConfig from './webpack.config.js';

const prodConfig = merge(baseConfig, {
  mode: 'production',
});

export default prodConfig;
