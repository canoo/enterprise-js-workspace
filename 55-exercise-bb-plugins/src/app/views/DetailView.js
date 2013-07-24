define([
    '$',
    '_',
    'backbone'

    // No HBS includes and template imports required

], function ($, _, Backbone) {

    var DetailView = Backbone.View.extend({

        // templates are referenced by name
        template: 'detail',

        events: {
            "blur .item-name"   : "onItemFocusLost",
            "click .item-delete": "onItemDelete"
        },

        initialize: function () {
            this.listenTo(this.collection, 'all', this.render);
        },

        // No render method required
        // render: function() { },

        // serialize method to pass data to the template
        serialize: function () {
            return {
                notes: this.collection.toJSON()
            };
        },

        onItemFocusLost: function (event) {
            var $target = $(event.target);
            var value = $target.html();
            var index = $target.parents('[data-index]').data("index");

            this.trigger("item:change", {
                value: value,
                index: index
            });
        },

        onItemDelete: function (event) {
            var $target = $(event.target);
            var index = $target.parents('[data-index]').data("index");

            this.trigger("item:delete", {
                index: index
            });
        }

    });

    return DetailView;

});