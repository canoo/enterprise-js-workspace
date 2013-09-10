require.config({
    baseUrl: 'app',
    paths  : {
        'app'   : '../app',
        'moment': '../scripts/moment/moment'
    },
    shims  : {
        // non AMD capable scripts go here
    }
});

// run the app
require(['app']);
