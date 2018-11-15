const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false,
            }),
            new Visualizer(),
        ],
        performance: {
            hints: 'warning',
            maxEntrypointSize: 130000 * 3,
        }
    },
};
