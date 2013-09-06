Exercise - Deferrds
===================

In this exercise you will use deferrds to synchronize asynchronous JavaScript activities. This techniques will help you to create concise APIs for asynchronous components.


Delete Animation
================

1. Open the DetailView class and use the excelent [move.js][1] animation library to create a async animation function which is triggered when the user clicks on the delete icon. This method should be surrounded with a defferred object.

  ```JavaScript
  _startDeleteItemAnimation: function(el) {
      var dfd = $.Deferred();
      // e.g. scale down the item 
      // the duratio is set to half a second
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

// TODO
The item animation shall be triggered on all other items wich will remain 

  ```JavaScript
  
  // TODO
  
  ```

    
  [1]: http://visionmedia.github.io/move.js "Move.js"
