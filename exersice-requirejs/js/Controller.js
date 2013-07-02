var Controller = (function(){

    var Controller = function(options){
        this.inputView = options.input;
        this.detailView = options.detail;
        this.model = options.model;

        this.initialize();
    };


    Controller.prototype.initialize = function() {
        var me = this;
        this.inputView.addInputListener(function (input) {
            me.model.addItem({name: input});
            me.detailView.render({ items: me.model.getItems() });
        });
    };


    return Controller;

})(this);