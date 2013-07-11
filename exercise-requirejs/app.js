App = {};

App.Controller = (function(){

    var Controller = function(options){
        this.inputView = options.input;
        this.detailView = options.detail;
        this.model = options.model;

        this.initialize();
    };

    Controller.prototype.initialize = function() {
        var me = this;

        // add enter key listener
        this.inputView.addKeyListener(function (input) {
            me.model.addItem({name: input});
            me.detailView.render({ items: me.model.getItems() });
        });

        // add button click listener
        this.inputView.addClickListener(function (input) {
            me.model.addItem({name: input});
            me.detailView.render({ items: me.model.getItems() });
        });

        // add button click listener
        this.detailView.addChangeListener(function (value, index) {
            me.model.updateItem({name: value}, index);
            me.detailView.render({ items: me.model.getItems() });
        });
    };

    return Controller;

})();


App.DetailView = (function(){

    var template = function(context) {
        context = context || {};
        var items = context.items || [];

        var list = document.createElement('ul');

        items.forEach(function (item, index) {
            var listItem = document.createElement('li');
            listItem.innerHTML = item.name;
            listItem.dataset.index = index;
            listItem.contentEditable = true;
            listItem.onblur = this.changeListener;
            list.appendChild(listItem);
        }, this);

        return list;
    };

    var View = function(el, tpl){
        this.el = el || document.body;
        this.template = (tpl || template).bind(this);
    };

    View.prototype.addChangeListener = function(listener) {
        this.changeListener = function(event) {
            var target = event.target;
            var value = target.innerHTML;
            var index = target.dataset.index;
            listener(value, index);
        }
    };

    View.prototype.render = function(context) {
        var html = this.template(context);

        while (this.el.firstChild) {
            this.el.removeChild(this.el.firstChild);
        }

        this.el.appendChild(html);
    };

    return View;

})();

App.InputView = (function(){

    var View = function(el){
        this.el = el || document.body;
        this.initialize();
    };

    View.prototype.initialize = function() {
        this.label = document.createElement('label');
        this.label.innerHTML = 'Input';
        this.label.for = 'input';

        this.input = document.createElement('input');
        this.input.id = 'input';
        this.input.type = 'input';

        this.button = document.createElement('button');
        this.button.innerHTML = "Add";
    };

    View.prototype._clearView = function() {
        while (this.el.lastChild) {
            this.el.removeChild(this.el.lastChild);
        }
    };

    View.prototype.render = function() {

        this._clearView();

        this.el.appendChild(this.label);
        this.el.appendChild(this.input);
        this.el.appendChild(this.button);
    };

    View.prototype.addClickListener = function(listener) {
        var me = this;
        this.button.addEventListener('click', function () {
            if(me.input.value) {
                listener(me.input.value);
                me.input.value = "";
            }
        });
    };

    View.prototype.addKeyListener = function(listener) {
        var me = this;
        this.input.addEventListener('keyup', function (event) {
            if(event.keyCode == 13) {
                if(me.input.value) {
                    listener(me.input.value);
                    me.input.value = "";
                }
            }
        });
    };

    return View;

})();

App.Model = (function () {

    var Model = function (options) {
        options = options || {};
        this.items = options.items || [];
    };

    Model.prototype.updateItem = function (item, index) {
        this.items[index] = item;
    };

    Model.prototype.addItem = function (item) {
        this.items.push(item);
    };

    Model.prototype.getItems = function () {
        return this.items;
    };

    Model.prototype.setItems = function (items) {
        this.items = items;
    };

    return Model;

})();

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