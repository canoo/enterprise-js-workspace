require.config({
    baseUrl: 'app',
    paths  : {
        'app'   : '../app',
        'handlebars': '../scripts/handlebars/handlebars',
        'backbone': '../scripts/backbone/backbone',
        'jquery': '../scripts/jquery/jquery',
        'text': '../scripts/requirejs/text',
        'underscore': '../scripts/underscore/underscore'
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
        }
    },

    map : {
        '*': {
            $: 'jquery',
            _: 'underscore'
        }
    }
});

// run the app
require(['$','app'], function($, app) {
    // use the jquery ready function as the entry point for the application
    $(function() {
        app.start();
    });
});
