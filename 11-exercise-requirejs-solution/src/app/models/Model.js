define(function() {

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

});
