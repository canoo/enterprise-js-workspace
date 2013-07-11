Setup
=====

Install all required node libraries to set up the project

```bash
    npm install
```

Check if you can clean and build the project with grunt

```bash
grunt clean build
```

Open the index.html file within your build/ folder

Exercise 1 - Require.js
=======================

1. create a reasonable folder structure for your project
  - src/app/controller
  - src/app/models
  - src/app/views
  - src/resources

2. download Require.js
  - from: http://requirejs.org/docs/release/2.1.8/comments/require.js
  - to: src/scripts/requirejs/require.js

3. define a AMD module for each application class

4. create a minimal require.js configuration file
  - set up base url
  - setup some paths
  - and start the application

5. change index.html to start require.js application

6. run the app within the browser

7. try to adjust the Gruntfile.js file to use r.js