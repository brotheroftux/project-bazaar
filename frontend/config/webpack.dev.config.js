const util = require('./util')

module.exports = {
    mode: 'development',
    module: {
        rules: util.styleLoaders({
            extract: false
        })
    },
    devServer: {
        proxy: {
            '/api': 'http://localhost:8000'
        }
    }
}