Exercise - Backbone MVC
=======================

In this exercise you will implement a "Delete" action for our note items.

Controller
==========

1. Implement a delete action method on the notes Controller which will receive the note model index within the notes collection

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

1. Add a div element to the DetailView handlebars template which will act as a button to trigger the delete action e.g.


    ```HTML
        <div class="item-delete hbox"><span class="close-x">x</span></div>
    ```

2. Extend the DetailView class
    - listen to click events on the button
    - listen on delete events on the collection to render the delete changes
    - implement on delete button click handler

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


