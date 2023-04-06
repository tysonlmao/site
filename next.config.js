const webpack = require('webpack');
const { parsed: myEnv } = require('dotenv').config({
    path: '/full/custom/path/to/env'
});

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: ""
            }
        ]
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: '@svgr/webpack'
        });
        return config;
    }
};