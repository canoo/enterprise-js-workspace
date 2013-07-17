define([
    // Libs
    '$',
    '_',
    'handlebars',
    'backbone'
], function ($, _, Handlebars, Backbone) {
    return Backbone.View.extend({

        template: function() {}, /* TODO compile handlebars template */

        className: 'sampleview',

        // dom events of interest
        events: {
            /* TODO register click event using selector */
        },

        initialize: function (options) {
            /* TODO set data object from options */
        },

        render: function() {
            /* TODO render the template and set the element's html */
        },

        onClick: function() {
            /* TODO fire application event */
        }

    });
});
