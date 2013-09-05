Backbone View
=============

In this exercise we will implement a simple [Backbone][2] view using [Handlebars][1] templating.
The view will react to a click event and will fire an application event.

Implement View
--------------

1. Define and compile handlebars template

  ```JavaScript
  Handlebars.compile("<div>{{text}}</div>")
  ```

2. Implement render()

  ```JavaScript
  var html = this.template(this.data);
  this.$el.html(html);
  return this;
  ```

3. Register click event

  ```JavaScript
  'click #text': "onClick"
  ```

4. Fire application event

  ```JavaScript
  this.trigger("view:clicked");
  ```

Integrate View
--------------

1. Implement start() in app.js

```JavaScript
var sampleView = new SampleView({ data: { text: "Hello there"} });
sampleView.render();

$("body").empty().append(sampleView.el);
```

[1]: http://handlebarsjs.com     "Handlebars"
[2]: http://backbonejs.org     "Backbone"
