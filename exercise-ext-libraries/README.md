External Library
================

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

3. 