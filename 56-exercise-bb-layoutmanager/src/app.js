define([

    // libs
    '$', '_', 'backbone',

    // components
    'models/Notes',
    'views/MainView',
    'controller/Controller',

    // plugins and scripts
    'templates/HandlebarsHelper',
    'backbone.layoutmanager'

], function ($, _, Backbone, Notes, MainView, Controller) {

    return {

        init: function () {

            // Configure LayoutManager
            Backbone.Layout.configure({

                // This is really useful to treat Views as Layouts
                manage        : true,

                // templates are located inside the templates folder
                prefix        : 'app/templates/',

                // make layout manager work with handlebars
                renderTemplate: function (template, context) {
                    return template(context);
                },

                // make layoutmanager to fetch templates from the server
                fetchTemplate : function (path) {
                    // To put this method into async-mode, simply call `async` and store the
                    // return value (callback function).
                    var done = this.async();

                    // Asynchronously fetch the path in `template` and compile the contents
                    // into a template.
                    $.get(path + '.html', function (contents) {
                        done(Handlebars.compile(contents));
                    }, "text");
                }
            });
        },

        start: function () {
            var controller = new Controller();
        }
    }

});
