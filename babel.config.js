module.exports = function (api) {
    api.cache.forever();

    const presets = [
        "@babel/preset-env"
    ];

    const plugins = [
        "@babel/plugin-proposal-optional-chaining"
    ];

    return {
        presets,
        plugins
    };
}