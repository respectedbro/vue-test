const webpack = require('webpack');

module.exports = {
   configureWebpack: {
      plugins: [
         new webpack.DefinePlugin({
            '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),
            '__VUE_OPTIONS_API__': JSON.stringify(true),
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
         })
      ],
   },
};