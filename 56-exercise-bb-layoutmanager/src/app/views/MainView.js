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
            this.insertView('#input', new InputView());
            this.insertView('#detail', new DetailView({ collection: this.collection }));
        }
    });
});
