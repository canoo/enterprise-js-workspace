define([

    '$',
    'model/Note'

], function($, Note){

    return {
        start: function() {
            var model = new Note({
                name: 'my personal note'
            });

            // watch the console!
            console.log(model.toJSON());
        }
    }

});
