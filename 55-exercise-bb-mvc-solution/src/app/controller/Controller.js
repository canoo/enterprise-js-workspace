define([
    // Libs
    '_',
    'backbone',
    'models/Note'
], function (_, Backbone, Note) {

    var Controller = function (options) {
        this.inputView = options.inputView;
        this.detailView = options.detailView;
        this.collection = options.collection;
        this.initialize();
    };

    _.extend(Controller.prototype, Backbone.Events, {

        initialize: function () {
            this.inputView.render();
            this.detailView.render();

            this.listenTo(this.inputView, "item:add", this.onNoteAdd);
            this.listenTo(this.detailView, "item:change", this.onNoteChange);
            this.listenTo(this.detailView, "item:delete", this.onNoteDelete);
        },

        onNoteAdd: function (item) {
            this.collection.add(new Note(item));
        },

        onNoteChange: function (event) {
            var model = this.collection.at(event.index);
            model.set({
                name: event.value,
                date: new Date()
            });
        },

        onNoteDelete: function (event) {
            var model = this.collection.at(event.index);
            model.destroy();
        }

    });

    return Controller;

});
