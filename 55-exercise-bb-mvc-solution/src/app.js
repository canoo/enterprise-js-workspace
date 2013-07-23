define([

    'models/Notes',
    'views/InputView',
    'views/DetailView',
    'controller/Controller'

], function(Notes, InputView, DetailView, Controller){

    return {
        start: function() {

            var notes = new Notes();
            var inputView = new InputView({ el: '#input' });
            var detailView = new DetailView({
                el: '#detail',
                collection: notes
            });

            var controller = new Controller({
                inputView : inputView,
                detailView: detailView,
                collection : notes
            });

        }
    }

});
