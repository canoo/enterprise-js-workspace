require.config({
    baseUrl: 'app',
    paths  : {
        main: '../main'
    },
    shims  : {}
});

// run the app
require(['main']);
