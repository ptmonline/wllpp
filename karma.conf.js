module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['jasmine'],

        files: [
          './app/scripts/vendors/angular.js',
          './app/scripts/vendors/angular-mocks.js',
          './app/scripts/vendors/angular-resource.js',
          './app/scripts/vendors/angular-route.js',
          './app/app.js',
          // './app/controllers/MainCtrl.js',
          './app/controllers/layout.controller.js',
          './app/controllers/order.controller.js',
          './app/test/controllers/controllers_specs.js',
          './app/test/services/services_specs.js', 
          './app/services/service.data.js',
          './app/services/data.service.js',
          './app/directives/navbar.directive.js',
          './app/routes.js'

        ],

        exclude: [
        ],

        // preprocessors: {
        //     './app/**/*.js': ['browserify'],
        //     './app/test/*.js': ['browserify']
        // },

        // browserify: {
        //     debug: true,
        //     transform: [ 'babelify' ]
        // }

        // define reporters, port, logLevel, browsers etc.
    });
};
