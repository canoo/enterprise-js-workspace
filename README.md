Exersices
=========

This project contains workshop related exercises

Prerequisites
---------------
Node.js http://nodejs.org
Grunt.js http://gruntjs.com
Buster.js http://busterjs.org
Bower.js http://bower.io
Compass http://www.compass-style.org
WebKit Browser

1. Installation
---------------

	* Install Node.js http://nodejs.org/dist
	* Now you should have the npm command line tool available

* Install Grunt.js command line tool with npm

```
npm install -g grunt-cli
```

* Install Bower.js with npm

```
npm install -g bower
```

* Install Buster.js with npm

```
npm install -g buster
```

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
