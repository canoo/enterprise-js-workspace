// Require.js configuration
require.config({

    baseUrl: '',

    paths: {
        controller : 'src/app/controller',
        models     : 'src/app/models',
        views      : 'src/app/views'
    },

    shim : {
    }

});

require([], function () {
    console.log("INIT DONE");
});