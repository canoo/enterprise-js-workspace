define([
    // Libs
    '_',
    'backbone',
    'models/Note'
], function (_, Backbone,
        Note) {

    var Controller = function (options) {
        this.inputView = options.inputView;
        this.detailView = options.detailView;
        this.collection = options.collection;
        this.initialize();
    };

    /**
     * Extend also from Backbone.Events to make the controller fully compatible with Backbone event API
     */
    _.extend(Controller.prototype, Backbone.Events, {

        initialize: function() {

            // render the views
            this.inputView.render();
            this.detailView.render();

            // now we can listen to view events with the handy listenTo method
            this.listenTo(this.inputView, "item:add", this.onNoteAdd);
            this.listenTo(this.detailView, "item:change", this.onNoteChange);
        },

        onNoteAdd: function(item) {
            this.collection.add(new Note(item));
        },

        onNoteChange: function(event) {
            var model = this.collection.at(event.index);
            model.set({
                name: event.value,
                date: new Date()
            });
        }

    });

    return Controller;

});
