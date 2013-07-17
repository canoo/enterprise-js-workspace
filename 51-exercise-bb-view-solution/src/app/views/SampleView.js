define([
    // Libs
    '$',
    '_',
    'handlebars',
    'backbone'
], function ($, _, Handlebars, Backbone) {
    return Backbone.View.extend({

        template: Handlebars.compile("<div id='text'>{{text}}</div>"),

        className: 'sampleview',

        // dom events of interest
        events: {
            'click #text': "onClick"
        },

        initialize: function (options) {
            this.data = options.data || { text: "Hello World" }
        },

        render: function() {
            var html = this.template(this.data);
            this.$el.html(html);
            return this;
        },

        onClick: function() {
            // fire application event
            this.trigger("view:clicked");
        }

    });
});
