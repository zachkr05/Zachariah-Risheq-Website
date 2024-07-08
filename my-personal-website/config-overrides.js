module.exports = function override(config, env) {
    // Ignore source map warnings from specific files
    config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [/node_modules\/@mediapipe\/tasks-vision/],
    });
    return config;
};
