const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.esm-bundler.js' // Использование ESM-бандлера для Vue
            }
        },
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.plugin('define').use(webpack.DefinePlugin, [{
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true) // Включаем флаг для продакшн-сборки
            }]);
        }
    }
}