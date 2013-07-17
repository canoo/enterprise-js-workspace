define([

    'models/Model',
    'views/InputView',
    'views/DetailView',
    'controller/Controller'

], function(Model, InputView, DetailView, Controller){

    var inputEl = document.getElementById('input');
    var detailEl = document.getElementById('detail');

    var model = new Model();
    var detailView = new DetailView(detailEl);
    var inputView = new InputView(inputEl);

    inputView.render();

    var controller = new Controller({
        input : inputView,
        detail: detailView,
        model : model
    });
});
