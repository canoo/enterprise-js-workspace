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

        template: 'main',

        // add sub views before the main view gets rendered
        beforeRender: function () {

            var inputView = new InputView({ parent: this });
            this.listenTo(inputView, 'all', function (eventName, data) {
                this.trigger(eventName, data);
            });
            this.insertView('#input', inputView);

            var detailView = new DetailView({ parent: this, collection: this.collection });
            this.listenTo(detailView, 'all', function (eventName, data) {
                this.trigger(eventName, data);
            });
            this.insertView('#detail', detailView);
        }
    });
});
