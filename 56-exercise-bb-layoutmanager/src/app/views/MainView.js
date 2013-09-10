define([
    // Libs
    '$',
    '_',
    'backbone',
    'views/InputView',
    'views/DetailView',

    // plugins
    'backbone.layoutmanager'
], function ($, _, Backbone, InputView, DetailView) {

    // MainView Layout class
    return Backbone.Layout.extend({

        el: 'body',

        // use the template main.html which is
        // fetched and compiled by the backbone.layoutmanager plugin
        template: 'main',

        // add sub views before the main view gets rendered
        beforeRender: function () {

            var inputView = new InputView();

            // bubble all events from the sub view to upper views
            this.listenTo(inputView, 'all', function (eventName, data) {
                this.trigger(eventName, data);
            });

            // insert this view at the #input selector
            this.insertView('#input', inputView);


            var detailView = new DetailView({ collection: this.collection });

            // bubble all events from the sub view to upper views
            this.listenTo(detailView, 'all', function (eventName, data) {
                this.trigger(eventName, data);
            });

            // insert this view at the #detail selector
            this.insertView('#detail', detailView);
        }
    });
});
