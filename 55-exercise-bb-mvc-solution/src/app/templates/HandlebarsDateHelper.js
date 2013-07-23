define([
    'moment',
    'handlebars'
], function(moment,
            Handlebars) {

    Handlebars.registerHelper('date', function(date, url) {
        return moment(date).format('HH:mm:ss');
    });

});