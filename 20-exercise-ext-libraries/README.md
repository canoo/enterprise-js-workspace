External Library
================

In this exercise we will add a new library which we will use within our AMD modules.

Require.js setup
----------------

1. Add a JavaScript - e.g. Moment.js - library to you project

2. Tell Require.js about the new dependency

Your your require.js config file should look something like this

```JavaScript

require.config({
    baseUrl: 'app',
    paths  : {
        'app': '../app'

        'moment' : '../scripts/moment/moment'
    },

    shims  : { }
});

```

Implementation
--------------

1. Change Controller logic to add a timestamp each time a model item is created or changed
2. Extend the DetailView logic to display the modification date as a read only field
3. Include Moment.js library into DetailView and apply a date format of your choice
