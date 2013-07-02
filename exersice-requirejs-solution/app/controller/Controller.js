define(function () {

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
    };

    return Controller;
});
