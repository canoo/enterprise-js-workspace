Exercise - Backbone MVC
=======================

In this exercise you will implement a "Delete" action for our note items.

Controller
==========

1. Implement a delete action method on the notes Controller which will receive the note model index

    ```JavaScript
      onNoteDelete: function (event) {
          var model = this.collection.at(event.index);
          model.destroy();
      }
    ```

2. Register an an event listener on the DetailView to listen to the delete events

    ```JavaScript

      initialize: function () {
        ...

        this.listenTo(this.detailView, "item:delete", this.onNoteDelete);

        ...
      },

    ```

DetailView
==========

1. Add a div element to the DetailView handlebars template which will act as a button to trigger the delete action eg.


    ```HTML
        <div class="item-delete hbox"><span class="close-x">x</span></div>
    ```

2. Extend the DetailView class to listen to click events on the button

    ```JavaScript
        ...
        events: {
            "blur .item-name": "onItemFocusLost",
            "click .item-delete": "onItemDelete"
        },
        ...

         onItemDelete: function(event) {
            var $target = $(event.target);
            var index = $target.parents('[data-index]').data("index");
            this.trigger("item:delete", { index: index });
         }

    ```


[1]: http://backbonejs.org     "Backbone"
