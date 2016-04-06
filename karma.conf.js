module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['browserify', 'jasmine'],

        files: [
          './app/app.js',
          './app/services/serviceData.js',
            './app/controllers/myController.js',
            './app/test/test.js'
        ],

        exclude: [
        ],

        preprocessors: {
            './app/**/*.js': ['browserify'],
            './app/test/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        }

        // define reporters, port, logLevel, browsers etc.
    });
};
