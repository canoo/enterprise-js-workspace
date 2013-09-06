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

        _startItemAnimation: function(el) {
            var dfd = $.Deferred();
            Move(el).set('-webkit-transform', 'rotateX(360deg)').duration(1000).end(function () {
                dfd.resolve();
            });
            return dfd.promise();
        },

        _startDeleteItemAnimation: function(el) {
            var dfd = $.Deferred();
            Move(el).set('-webkit-transform', 'rotateX(90deg)').duration(500).end(function () {
                dfd.resolve();
            });
            return dfd.promise();
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
            var me = this;
            var index = $item.data("index");
            me._startDeleteItemAnimation($item.get(0)).then(function () {
                me.notifyDelete(index);
            });
        },

        deleteItem2: function($deleteItem) {

            var me = this;
            var deferreds = [];

            var index = $deleteItem.data("index");
            var $items = this.$('li[data-index!=' + index + ']');

            // start a new animation for non delete items
            $items.each(function(index, el) {
                var promise = me._startItemAnimation(el);
                deferreds.push(promise);
            });

            // start delete animation for the delete items
            var promise = me._startDeleteItemAnimation($deleteItem.get(0));
            deferreds.push(promise);

            $.when.apply(null, deferreds).then(function () {
                me.notifyDelete(index);
            });
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