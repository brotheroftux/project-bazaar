const util = require('./util')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    mode: 'development',
    module: {
        rules: util.styleLoaders({
            extract: true
        })
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
}