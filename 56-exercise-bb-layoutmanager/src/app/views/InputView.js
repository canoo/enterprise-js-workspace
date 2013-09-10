define([
    '$',
    '_',
    'backbone',
], function($, _, Backbone) {

    var InputView = Backbone.View.extend({

        className: 'input-view',

        // uset the input template
        template: 'input',

        events: {
            "click button": "onAddClicked",
            "keyup #input": "onEnterPressed"
        },

        notifyAdd: function () {
            var $input = this.$('#input');
            var name = $input.val();
            if (name) {
                this.trigger("item:add", {
                    name: name
                });
                $input.val('');
            }
        },

        onAddClicked: function(event) {
            this.notifyAdd();
        },

        onEnterPressed: function(event) {
            if(event.keyCode == 13) {
                this.notifyAdd();
            }
        }

    });

    return InputView;

});

