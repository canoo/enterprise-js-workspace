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

        initialize: function (options) {
            options = options || {};
            this.parent = options.parent;
            this.listenTo(this.collection, 'all', this.render);
        },

        // No render method required
        // render: function() { },

        // serialize method to pass data to the template
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
            if (this.parent) {
                this.parent.trigger("item:delete", {
                    index: index
                });
            }
        },

        notifyChange: function (index, value) {
            if (this.parent) {
                this.parent.trigger("item:change", {
                    index: index,
                    value: value
                });
            }
        }

    });

    return DetailView;

});