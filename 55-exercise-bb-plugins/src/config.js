require.config({
    baseUrl: 'app',
    paths  : {
        'app'                   : '../app',
        'init'                  : '../init',
        'handlebars'            : '../scripts/handlebars/handlebars',
        'backbone'              : '../scripts/backbone/backbone',
        'backbone.layoutmanager': '../scripts/backbone/backbone.layoutmanager',
        'jquery'                : '../scripts/jquery/jquery',
        'text'                  : '../scripts/requirejs/text',
        'underscore'            : '../scripts/underscore/underscore',
        'moment'                : '../scripts/moment/moment'
    },

    shim: {
        'underscore': {
            exports: '_'
        },

        'backbone': {
            deps   : [ '_', '$' ],
            exports: 'Backbone'
        },

        'backbone.layoutmanager': {
            deps: [ 'backbone' ]
        },

        'handlebars': {
            exports: 'Handlebars'
        }
    },

    map: {
        '*': {
            $: 'jquery',
            _: 'underscore'
        }
    }
});

// run the app
require(['$', 'app'], function ($, app) {
    // use the jquery ready function as the entry point for the application
    $(function () {
        app.init();
        app.start();
    });
});
