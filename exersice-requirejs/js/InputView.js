var InputView = (function(){

    var View = function(el){
        this.el = el || document.body;
        this.listeners = [];
    };

    View.prototype.addInputListener = function(listener) {
        this.listeners.push(listener);
    };

    View.prototype.render = function() {

        var label = document.createElement('label');
        label.innerHTML = 'Input';
        label.for = 'input';
        
        var input = document.createElement('input');
        input.id = 'input';
        input.type = 'input';

        var button = document.createElement('button');
        button.innerHTML = "Add";

        this.el.appendChild(label);
        this.el.appendChild(input);
        this.el.appendChild(button);

        var me = this;
        button.addEventListener('click', function () {
            me.notifyListeners(input.value);
        });

        input.addEventListener('keyup', function (event) {
            if(event.keyCode == 13) {
                me.notifyListeners(input.value);
            }
        });
    };

    View.prototype.notifyListeners = function(input) {
        this.listeners.forEach(function (listener) {
            listener(input);
        });
    };

    return View;

})(this);

