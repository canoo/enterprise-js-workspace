define([
    // Libs
    '_',
    'backbone',

    'models/Note'

], function (_, Backbone, Note) {

    return Backbone.Collection.extend({
        model: Note
    });

});
