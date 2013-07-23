define([
    '$',
    '_',
    'backbone',
    'handlebars',
    'text!templates/input.html'
], function($, _, Backbone,
            Handlebars,
            inputTemplate) {

    var InputView = Backbone.View.extend({

        template: Handlebars.compile(inputTemplate),

        events: {
            "click button": "onAddClicked",
            "keyup #input": "onEnterPressed"
        },

        render: function() {
            var html = this.template();
            this.$el.html(html);
        },

        notifyAdd: function () {
            var $input = this.$('#input');
            var name = $input.val();
            if (name) {
                this.trigger("add", {
                    name: name
                });
                $input.html('');
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

