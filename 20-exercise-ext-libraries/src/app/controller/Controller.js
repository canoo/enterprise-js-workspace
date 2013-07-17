define(function () {

    var Controller = function (options) {
        this.inputView = options.input;
        this.detailView = options.detail;
        this.model = options.model;

        this.initialize();
    };

    Controller.prototype.initialize = function () {
        var me = this;

        // add enter key listener
        this.inputView.addKeyListener(function (input) {
            me.model.addItem({
                name: input,
                date: new Date() // add timestamp
            });
            me.detailView.render({
                items: me.model.getItems()
            });
        });

        // add button click listener
        this.inputView.addClickListener(function (input) {
            me.model.addItem({
                name: input,
                date: new Date() // add timestamp
            });
            me.detailView.render({ items: me.model.getItems() });
        });

        // add button click listener
        this.detailView.addChangeListener(function (value, index) {
            me.model.updateItem({
                name: value,
                date: new Date() // add timestamp
            }, index);
            me.detailView.render({ items: me.model.getItems() });
        });
    };

    return Controller;
});
