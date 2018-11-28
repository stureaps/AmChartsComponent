module.exports = function (api) {
    api.cache.forever();

    const presets = [
        ["@babel/preset-env", {
            "useBuiltIns": "usage"
        }]
    ];

    const plugins = [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-optional-chaining"
    ];

    return {
        presets,
        plugins
    };
}