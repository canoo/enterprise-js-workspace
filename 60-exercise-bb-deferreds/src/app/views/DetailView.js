define([
    '$',
    '_',
    'backbone',
    'move'

    // No HBS includes and template imports required

], function ($, _, Backbone, Move) {

    var DetailView = Backbone.View.extend({

        // templates are referenced by name
        template: 'detail',

        events: {
            "blur .item-name"   : "onItemFocusLost",
            "click .item-delete": "onItemDelete"
        },

        initialize: function (options) {
            this.listenTo(this.collection, 'all', this.render);
        },

        serialize : function () {
            return {
                notes: this.collection.toJSON()
            };
        },

        _startItemAnimation: function($el) {
            // TODO
            // - create a deferred object
            // - implement a animation for a note item of your choice with a duration of 1s
            // - resolve the deferred when the animation has finished
        },

        _startDeleteItemAnimation: function($el) {
            // TODO
            // - create a deferred object
            // - implement a animation for a note item of your choice with a duration of eg. 0.5s
            // - resolve the deferred when the animation has finished
        },

        onItemFocusLost: function (event) {
            var $target = $(event.target);
            var value = $target.html();
            var index = $target.parents('[data-index]').data("index");
            this.notifyChange(index, value);
        },

        onItemDelete: function (event) {
            var $target = $(event.target);
            var $item = $target.parents('[data-index]');
            this.deleteItem2($item);
        },

        deleteItem1: function($item) {
            // TODO
            // start delete animation
            // wait until animation has finished and trigger the delete action
        },

        deleteItem2: function($item) {
            // TODO
            // use jquery to find all other items in the list
            // start the delete animation
            // start item animations on each item in the list
            // collect the deferred objects
            // wait until all objects has been completed and trigger the delete action
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