(function (App) {

    document.addEventListener('DOMContentLoaded', function () {

        var inputEl = document.getElementById('input');
        var detailEl = document.getElementById('detail');

        var model = new App.Model();
        var detailView = new App.DetailView(detailEl);
        var inputView = new App.InputView(inputEl);

        inputView.render();

        var controller = new App.Controller({
            input : inputView,
            detail: detailView,
            model : model
        });

    }, false);

})(App);

