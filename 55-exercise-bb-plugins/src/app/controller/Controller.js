define([
    // Libs
    '_',
    'backbone',
    'models/Note'
], function (_, Backbone, Note) {

    var Controller = function (options) {
        this.mainView = options.mainView;
        this.collection = options.collection;
        this.initialize();
    };

    _.extend(Controller.prototype, Backbone.Events, {

        initialize: function() {

            // events from child views are propagated to parent views
            this.listenTo(this.mainView, "item:add", this.onNoteAdd);
            this.listenTo(this.mainView, "item:change", this.onNoteChange);
            this.listenTo(this.mainView, "item:delete", this.onNoteDelete);
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
        },

        onNoteDelete: function(event) {
            var model = this.collection.at(event.index);
            model.destroy();
        }

    });

    return Controller;

});
