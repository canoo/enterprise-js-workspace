var DetailView = (function(){

    var template = function(context) {
        context = context || {};
        var items = context.items || [];

        var result = "";
        items.forEach(function (item) {
            result += "<li>" + item.name + "</li>"
        });
        return "<ul>" + result + "</ul>";
    };


    var View = function(el, tpl){
        this.el = el || document.body;
        this.template = tpl || template;
    };

    View.prototype.render = function(context) {
        var html = this.template(context);

        while (this.el.firstChild) {
            this.el.removeChild(this.el.firstChild);
        }
        this.el.innerHTML = html;
    };

    return View;

})(this);