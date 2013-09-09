Exercise - Touch Events with Hammer.js
======================================

In this exercise you will use [Hammer.js][1] use higher touch level events like tap and swipe.

Setup
=====

1. Use Bower to install Hammer.js. Append the '--save' argument and bower will insert the correct entry inside of bower.json


    ```bash
        bower install hammerjs --save
    ```

2. Update rquirejs configuration to point to Hammer.js

    ```JavaScript
        require.config({
            ...
            paths  : {
                ...
                'hammer'                : '../scripts/hammerjs/dist/hammer'
                ...
            },
            ...
        );

    ```

Usage
=====

1. First we will have to setup Hammer.js in our project so that hammerjs touch events are recognized by the browser. See: [Hammer.js wiki][2] . Open the app.js file, pull in hammerjs as a dependency and put the following configuration inside the 'init' function.


    ```JavaScript

        define([
            // libs

            '$', '_', 'backbone', 'hammer', ...

        ], function ($, _, Backbone, Hammer, Notes, MainView, Controller) {

            init: function() {
                ...
                Hammer(document.body);
                ...
            }
            ...

        );

    ```

2. Now open the DetailView and use the tap event on the delete icon of the note item to trigger the delete action.

    ```JavaScript

        events: {
            "tap .item-delete": "onItemDelete"
        }

    ```

3. Now define a swipe gesture on the the note item to delete the item

    ```JavaScript

        events: {
            "swipe li": "onSwipeDelete"
        },

        ...

        onSwipeDelete: function (event) {
            var $target = $(event.currentTarget);
            this.deleteItem2($target);
        },

        ...
    ```

  [1]: http://eightmedia.github.io/hammer.js/ "Hammer.js"
  [2]: https://github.com/EightMedia/hammer.js/wiki/Tips-&-Tricks "Hammer.js Tips & Tricks"
