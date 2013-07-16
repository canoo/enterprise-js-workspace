# Exersices
===========

This project contains workshop related exercises


1. Installation
---------------

1.1 Node.js
-----------

Install Node.js from http://nodejs.org
Now you should have the npm (node package manager) command line tool available

1.2 Grunt
---------

Install Grunt.js command line tool globally using npm

```
npm install -g grunt-cli
```

1.3 Bower
---------

Install Bower.js globally using npm

```
npm install -g bower
```

1.4 Buster.js
-------------

Install Buster.js globally using npm

```
npm install -g buster
```

1.5 Phantom.js

* To run the Buster.js tests in a headless browser Install Phantomjs http://phantomjs.org
* Make sure you have Ruby installed on your machine. Use Ruby package manager gem to install compass

```
gem update --system
gem install compass
```

* Checkout the sources:

```
git clone some url
git clone some url
```

* Go to root directory and install missing npm and bower dependencies:

```
npm install
bower install
```

2. Grunt Tasks
--------------
To build the project run

```
grunt build
```
this will create a 'build' folder, minify all JavaScript source files, generate CSS files using compass, compile handlebars templates and copy all other relevant resources.

To run the buster test suite run

```
grunt test
```

Very useful during development

```
grunt watch
```
this will watch all resources like HTML templates, sass files, test files etc. and run a appropriate grunt task to process the resource.


Now open the src/index.html and you should see the application.