define([
    'moment',
    'handlebars'
], function(moment,
            Handlebars) {

    Handlebars.registerHelper('prettyDate', function(date, options) {
        var format = options.hash.format || 'HH:mm:ss';
        return moment(date).format(format);
    });

});