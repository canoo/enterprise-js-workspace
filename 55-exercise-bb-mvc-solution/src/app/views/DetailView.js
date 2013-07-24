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
            "blur .item-name": "onItemFocusLost",
            "click .item-delete": "onItemDelete"
        },

        initialize: function() {
            this.listenTo(this.collection, 'all', this.render);
        },

        render: function() {
            var viewModel = this.collection.toJSON();
            var html = this.template({
                notes: viewModel
            });
            this.$el.html(html);
        },

        onItemFocusLost: function(event) {
            var $target = $(event.target);
            var value = $target.html();
            var index = $target.parents('[data-index]').data("index");

            this.trigger("change:item", {
                value: value,
                index: index
            });
        },

        onItemDelete: function(event) {
            var $target = $(event.target);
            var index = $target.parents('[data-index]').data("index");

            this.trigger("delete:item", {
                index: index
            });
        }

    });

    return DetailView;

});