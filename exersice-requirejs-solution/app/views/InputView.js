define(function() {

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
            listener(me.input.value);
            me.input.value = "";
        });
    };

    View.prototype.addKeyListener = function(listener) {
        var me = this;
        this.input.addEventListener('keyup', function (event) {
            if(event.keyCode == 13) {
                listener(me.input.value);
                me.input.value = "";
            }
        });
    };

    return View;

});

