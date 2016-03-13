/**
 * Created by Sidona on 3/13/2016.
 */
(function (define) {
    "use strict";

    define([], function () {
        var _vendorPath = "../../vendor/";

        require.config({
            waitSeconds: 120,
            appDir: '',
            baseUrl: '../touch/src',
            paths: {
                "angular": _vendorPath + 'angular/angular',
                "ngAnimate": _vendorPath + 'angular-animate/angular-animate',
                "uiRouter": _vendorPath + 'angular-ui-router/release/angular-ui-router',
                "framework":"./framework",
                "controller":"./framework/controller",
                "model":"./framework/model"
            },
            urlArgs: 'v=1.0',

            shim: {
                'angular': {
                    'exports': 'angular'
                },

                'ngAnimate': {
                    'deps': ['angular']
                },
                'uiRouter': {
                    'deps': ['angular']
                }
            },
            priority: ['angular']
        });
        return require.config;
    });
}(define));