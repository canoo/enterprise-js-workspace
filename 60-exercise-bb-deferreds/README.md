Exercise - Deferrds
===================

In this exercise you will use deferrds to synchronize asynchronous JavaScript activities.
This techniques will help you to create concise APIs for asynchronous components.


Delete Animation
================

1. Open the DetailView class and use the excellent [move.js][1] animation library to create a async animation function which is triggered when the user clicks on the delete icon. This method should be surrounded with a defferred object.

  ```JavaScript
  _startDeleteItemAnimation: function(el) {
      var dfd = $.Deferred();
      // e.g. scale down the item 
      // the duration is set to half of a second
      Move(el).scale(0).duration(500).end(function () {
          // resolve the deferred object when the animation is finished
          dfd.resolve();
      });
      return dfd.promise();
  }  
  
  ```


2. Change the 'onItemDelete' method to invoke the animation. As soon the animation is finished fire the 'item:delete' event.

  ```JavaScript
  
  onItemDelete: function (event) {
      var me = this;
      var $target = $(event.target);
      var $item = $target.parents('[data-index]');
      var index = $item.data("index");
      
      me._startDeleteItemAnimation($item.get(0)).then(function () {
          // invoked when the animation promise has been resolved
          me.notifyDelete(index);
      });
  },

  ```

DetailView - Item Animation
===========================

Here we will extend the first example and synchronize several animations.

1. This animation shall be triggered when the user clicks on the delete icon. This method should be also surrounded with a defferred object.

  ```JavaScript

    _startItemAnimation: function(el) {
        var dfd = $.Deferred();
        // e.g. rotate the item
        // the duration is set to a second
        var dfd = $.Deferred();
        Move($el.get(0)).set('-webkit-transform', 'rotateX(360deg)').duration(1000).end(function () {
            dfd.resolve();
        });
        return dfd.promise();
    }

    ```

2. Change the 'onItemDelete' method to invoke the delete animation on the delete item and the item animation on all other items in the list. Collect all deferred objects into an array and use the Deferred.when() method to synchronize all animations.


  ```JavaScript

    onItemDelete: function (event) {

        var me = this;
        var deferreds = [];
        var $target = $(event.target);

        // delete item
        var $item = $target.parents('[data-index]');
        var index = $item.data("index");

        // all other items
        var $items = this.$('li[data-index!=' + index + ']');

        // start a new animation for non delete items
        $items.each(function(index, el) {
            var promise = me._startItemAnimation($(el));
            deferreds.push(promise);
        });

        // start delete animation for the delete items
        var promise = me._startDeleteItemAnimation($item);
        deferreds.push(promise);

        // wait until all animations has been finished and trigger delete action on the controller
        $.when.apply(null, deferreds).then(function () {
            me.notifyDelete(index);
        });

    }

  ```


  [1]: http://visionmedia.github.io/move.js "Move.js"
