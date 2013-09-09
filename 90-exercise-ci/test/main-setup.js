// Require.js configuration
require.config({

    baseUrl: '',

    paths: {
        models    : 'src/app/models',
        views     : 'src/app/views',
        controller: 'src/app/controller',

        'handlebars'            : 'src/scripts/handlebars/handlebars',
        'backbone'              : 'src/scripts/backbone/backbone',
        'backbone.layoutmanager': 'src/scripts/layoutmanager/backbone.layoutmanager',
        'jquery'                : 'src/scripts/jquery/jquery',
        'text'                  : 'src/scripts/requirejs-text/text',
        'underscore'            : 'src/scripts/underscore/underscore',
        'moment'                : 'src/scripts/moment/moment',
        'move'                  : 'src/scripts/movejs/move'

    },

    shim: {
        'jquery': {
            exports: '$'
        },

        'underscore': {
            exports: '_'
        },

        'backbone': {
            deps   : [ 'underscore', 'jquery' ],
            exports: 'Backbone'
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

require([], function () {
    console.log("INIT DONE");
});