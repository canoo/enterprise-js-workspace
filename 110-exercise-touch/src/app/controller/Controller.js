define([
    // Libs
    '_',
    'backbone',
    'models/Note',
    'models/Notes',

    'views/MainView'
], function (_, Backbone, Note, NoteCollection, MainView) {

    var Controller = function () {
        this.collection = new NoteCollection();
        this.initialize();
    };

    _.extend(Controller.prototype, Backbone.Events, {

        initialize: function() {

            this.mainView = new MainView({
                collection: this.collection
            });

            // events from child views are propagated to parent views
            this.listenTo(this.mainView, "item:add", this.onNoteAdd);
            this.listenTo(this.mainView, "item:change", this.onNoteChange);
            this.listenTo(this.mainView, "item:delete", this.onNoteDelete);

            this.mainView.render();
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
