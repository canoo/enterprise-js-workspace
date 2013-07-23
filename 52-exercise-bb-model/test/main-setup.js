// Require.js configuration
require.config({

    baseUrl: '',

    paths: {
        models : 'src/app/models',

        'jquery'                : 'src/scripts/jquery/jquery',
        'underscore'            : 'src/scripts/underscore/underscore',
        'backbone'              : 'src/scripts/backbone/backbone',
        'handlebars'            : 'src/scripts/handlebars/handlebars'

    },

    shim : {
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