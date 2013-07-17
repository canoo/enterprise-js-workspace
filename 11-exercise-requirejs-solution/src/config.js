require.config({
    baseUrl: 'app',
    paths  : {
        'app': '../app'
    },
    shims  : {}
});

// run the app
require(['app']);
