define([
    '$',
    '_',
    'backbone',
    'handlebars',
    'text!templates/detail.html'
], function($, _, Backbone,
            Handlebars,
            detailTemplate) {

    var DetailView = Backbone.View.extend({

        template: Handlebars.compile(detailTemplate),

        events: {
            "blur .item-name": "onItemFocusLost"
        },

        initialize: function() {
            // listen on change and add events and render the view
            this.listenTo(this.collection, 'change add', this.render);
        },

        render: function() {
            var notes = this.collection.toJSON();
            var html = this.template({
                notes: notes
            });
            this.$el.html(html);
        },

        onItemFocusLost: function(event) {
            var $target = $(event.target);
            var value = $target.html();
            var index = $target.parents('[data-index]').data("index");

            // fire application event to notify the controller in this case
            this.trigger("item:change", {
                value: value,
                index: index
            });
        }
    });

    return DetailView;

});
