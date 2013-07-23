Exercise - backbone models
==========================

1. implement a Note backbone model
  - defaults:
    - name field: empty string
    - date field: date of construction
  - getters, setters
  - optional: constructor that converts string date arguments to date objects

```JavaScript
defaults: {
    name: "",
    date: new Date()
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
```

2. implement a note backbone collection

3. write tests that show the correct behaviour of the collection-model event handling

```JavaScript
var collection = new Notes();
collection.add({ name: "note 1" });
collection.add({ name: "note 2" });

var called = false;

collection.on("change", function() {
    called = true
});

collection.at(1).setName("updated name");
assert(called);
```

```JavaScript
var collection = new Notes();
collection.add({ name: "note 1" });
collection.add({ name: "note 2" });

var spy = this.spy();

collection.on("change:name", spy);

var updateModel = collection.at(1);
updateModel.setName("updated name");

assert.calledOnceWith(spy, updateModel, "updated name");
```