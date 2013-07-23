define([
    'buster',
    'models/Note',
    'models/Notes'
], function (buster, Note, Notes) {

    var assert = buster.assertions.assert;
    var refute = buster.assertions.refute;

    buster.testCase("Note", {

        "basic properties" : {

            "setUp": function () {
                this.model = new Note();
            },

            "tearDown": function () {
                // nothing to do
            },

            "an empty model has a date set": function() {
                assert(this.model.getDate() != undefined);
            },

            "constructs a model with name correctly": function() {
                var model = new Note({
                    name : "my name",
                    date : new Date()
                });
                assert(model.getName() == "my name");
            },

            "sets and gets name property correctly": function() {
                assert(this.model.getName() == "");

                this.model.setName("test name");
                assert(this.model.getName() == "test name");
            }

        },

        "//advanced properties": {

            "creates a model with a date string argument": function () {
                var dateString = "Wed Jul 17 2020 10:10:10 GMT+0200 (CEST)";
                var model = new Note({
                    name: "with date string",
                    date: dateString
                });

                var modelDate = model.get("date");
                assert(modelDate != undefined);

                var parsedDate = new Date(Date.parse(dateString));
                assert(modelDate.getTime() == parsedDate.getTime());
            }

        },

        "collection properties" : {

            "adding and removing models to collections": function() {
                var collection = new Notes();
                assert(collection.size() == 0);

                collection.add({ name: "note 1" });
                assert(collection.size() == 1);
                var addedNote = collection.at(0);
                assert(addedNote.getName() == "note 1");

                collection.remove(addedNote);
                assert(collection.size() == 0);
            },

            "fires change event when a model changes": function() {
                /* TODO implement */
            },

            "fires specific name change event when a model name changes": function() {
                /* TODO implement */
            }

        }

    });
});