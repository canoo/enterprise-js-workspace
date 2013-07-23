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
            "blur li[data-index]": "onItemFocusLost"
        },

        initialize: function() {
            this.listenTo(this.collection, 'change add', this.render);
        },

        render: function() {
            var viewModel = this.collection.toJSON();
            var html = this.template({
                notes: viewModel
            });
            this.$el.html(html);
        },

        onItemFocusLost: function(event) {
            console.log(event);
            var $target = $(event.target);
            var value = $target.html();
            var index = $target.data("index");

            this.trigger("change:item", {
                value: value,
                index: index
            });
        }

    });

    return DetailView;

});