require.config({
    baseUrl: 'app',
    paths  : {
        'app'   : '../app',
        'moment': '../scripts/moment/moment'
    },
    shims  : {}
});

// run the app
require(['app']);
