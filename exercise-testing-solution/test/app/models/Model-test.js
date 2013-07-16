define([
    'buster',
    'models/Model'
], function (buster, Model) {

    var assert = buster.assertions.assert;
    var refute = buster.assertions.refute;

    buster.testCase("Model", {

        "basic properties" : {

            "setUp": function () {
                this.model = new Model();
            },

            "tearDown": function () {
            },

            "newly created model should be empty": function () {
                assert(this.model.getItems().length == 0);
            }

        },

        "item handling" : {

            "setUp": function () {
                this.model = new Model();
            },

            "tearDown": function () {
            },

            "items are added correctly": function () {
                var item = { name: "testitem" };
                this.model.addItem(item);
                assert(this.model.getItems().length == 1);
                assert(this.model.getItems()[0].name == 'testitem');
            },

            "items are updated correctly": function () {
                this.model.addItem({ name: "testitem" });
                assert(this.model.getItems().length == 1);
                assert(this.model.getItems()[0].name == 'testitem');

                this.model.updateItem({ name: "updated item" }, 0);
                assert(this.model.getItems().length == 1);
                assert(this.model.getItems()[0].name == 'updated item');
            }

        }


    });
});