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

    _.extend(Controller.prototype, Backbone.Events, {

        initialize: function() {
            this.inputView.render();
            this.detailView.render();

            this.listenTo(this.inputView, "add", this.addNote);
            this.listenTo(this.detailView, "change:item", this.noteChanged);
        },

        addNote: function(item) {
            this.collection.add(new Note(item));
        },

        noteChanged: function(event) {
            var model = this.collection.at(event.index);
            model.set("name", event.value);
        }

    });

    return Controller;

});
