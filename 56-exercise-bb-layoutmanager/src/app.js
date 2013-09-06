define([

    // libs
    '$', '_', 'backbone',

    // components
    'models/Notes',
    'views/MainView',
    'controller/Controller',

    // plugins and scripts
    'templates/HandlebarsDateHelper',
    'backbone.layoutmanager'

], function ($, _, Backbone, Notes, MainView, Controller) {

    return {

        init: function () {

            // Configure LayoutManager
            Backbone.Layout.configure({

                // This is really useful to treat Views as Layouts
                manage: true,

                prefix: 'app/templates/',

                // make layout manager work with handlebars
                render: function (template, context) {
                    return template(context);
                },

                fetch: function (path) {
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
            var notes = new Notes();
            var mainView = new MainView({
                collection: notes
            });

//            mainView.render().done(function () {
            var controller = new Controller({
                mainView  : mainView,
                collection: notes
            });
//            });

            mainView.render();
        }
    }

});