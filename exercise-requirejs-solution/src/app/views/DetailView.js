define(function() {
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

});