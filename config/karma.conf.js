
const webpack = require('webpack');
const configuration = {
    basePath: '',
    frameworks: [
        'mocha',
        'detectBrowsers'
    ],
    files: [
        '../test/*.test.js'
    ],
    port: 9876,
    colors: true,
    autoWatch: false,

    /**
     * see
     * @link https://github.com/litixsoft/karma-detect-browsers
     */
    detectBrowsers: {
        enabled: true,
        usePhantomJS: false,
        postDetection: function (availableBrowser) {
            return ['Chrome']; // comment in to test specific browser
            const browsers = availableBrowser
                .filter(b => !['PhantomJS', 'FirefoxAurora', 'FirefoxNightly'].includes(b))
                .map(b => {
                    if (b === 'Chrome') return 'Chrome_travis_ci';
                    else return b;
                });
            return browsers;
        }
    },

    // Karma plugins loaded
    plugins: [
        'karma-mocha',
        'karma-webpack',
        'karma-chrome-launcher',
        'karma-edge-launcher',
        'karma-firefox-launcher',
        'karma-ie-launcher',
        'karma-opera-launcher',
        'karma-detect-browsers'
    ],

    // Source files that you wanna generate coverage for.
    // Do not include tests or libraries (these files will be instrumented by Istanbul)
    preprocessors: {
        '../test/*.test.js': ['webpack']
    },

    client: {
        mocha: {
            bail: true,
            timeout: 12000
        }
    },
    webpack: {
        mode: 'development',
        plugins: [
            // fix "process is not defined" error:
            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
        ]
    },
    browsers: ['Chrome_travis_ci'],
    browserDisconnectTimeout: 12000,
    processKillTimeout: 12000,
    customLaunchers: {
        Chrome_travis_ci: {
            base: 'Chrome',
            flags: ['--no-sandbox']
        }
    },
    singleRun: true
};

if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
    /**
     * overwrite reporters-default
     * So no big list will be shown at log
     */
    // configuration.reporters = [];
}

module.exports = function (config) {
    config.set(configuration);
};
