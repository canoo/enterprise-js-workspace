define([
    '$',
    '_',
    'backbone'

    // No HBS includes and template imports required

], function ($, _, Backbone) {

    var DetailView = Backbone.View.extend({

        // templates are referenced by name
        // use the detail template
        template: 'detail',

        events: {
            "blur .item-name"   : "onItemFocusLost",
            "click .item-delete": "onItemDelete"
        },

        initialize: function (options) {
            this.listenTo(this.collection, 'all', this.render);
        },

        // No render method required
        // render: function() { },

        // serialize method to pass data required by the template
        serialize : function () {
            return {
                notes: this.collection.toJSON()
            };
        },

        onItemFocusLost: function (event) {
            var $target = $(event.target);
            var value = $target.html();
            var index = $target.parents('[data-index]').data("index");
            this.notifyChange(index, value);
        },

        onItemDelete: function (event) {
            var $target = $(event.target);
            var index = $target.parents('[data-index]').data("index");
            this.notifyDelete(index);
        },

        notifyDelete: function (index) {
            this.trigger("item:delete", {
                index: index
            });
        },

        notifyChange: function (index, value) {
            this.trigger("item:change", {
                index: index,
                value: value
            });
        }

    });

    return DetailView;

});