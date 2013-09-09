require.config({
    baseUrl: 'app',
    paths  : {
        'app'                   : '../app',
        'init'                  : '../init',
        'handlebars'            : '../scripts/handlebars/handlebars',
        'backbone'              : '../scripts/backbone/backbone',
        'backbone.layoutmanager': '../scripts/layoutmanager/backbone.layoutmanager',
        'jquery'                : '../scripts/jquery/jquery',
        'text'                  : '../scripts/requirejs-text/text',
        'underscore'            : '../scripts/underscore/underscore',
        'moment'                : '../scripts/moment/moment',
        'move'                  : '../scripts/movejs/move'
    },

    shim: {
        'underscore': {
            exports: '_'
        },

        'backbone': {
            deps   : [ '_', '$' ],
            exports: 'Backbone'
        },

        'handlebars': {
            exports: 'Handlebars'
        },

        'move': {
            exports: 'Move'
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
require(['app'], function (app) {
    // use the jquery ready function as the entry point for the application
    app.init();
    app.start();
});
