define([
    // Libs
    '_',
    'backbone'
], function (_, Backbone) {
    return Backbone.Model.extend({
        defaults: {
            name: "",
            date: new Date()
        },

        initialize: function(attr, options) {
            // post construction initialization goes here
        },

        constructor: function() {
            if (arguments.length > 0) {
                // convert date strings to date objects
                var params =  arguments[0];
                var date = params['date'];
                if (date && !(date instanceof Date)) {
                    params.date = new Date(Date.parse(date));
                }
            }
            Backbone.Model.apply(this, arguments);
        },

        getDate: function() {
            return this.get("date");
        },

        setName: function(name) {
            this.set("name", name);
        },

        getName: function() {
            return this.get("name")
        }
    });
});
