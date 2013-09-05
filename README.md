# Enterprise JS Workshop Workspace

This project contains workshop related exercises

1. Environment Setup
--------------------

_Note_: Some of the command line tools will be installed globally. For that you will probably need to run the command with ___super user permissions___.

1.1 Git
-------

Install a [Git][6] client for your machine.


1.2 Node.js
-----------

Install [Node.js][7] from http://nodejs.org

Now you should have the npm (node package manager) command line tool available

1.3 Grunt
---------

Install [Grunt][8] command line tool globally using npm

```
npm install -g grunt-cli
```

1.4 Bower
---------

Install [Bower][9] globally using npm

```
npm install -g bower
```

1.5 Buster.js
-------------

Install [Buster.js][10] globally using npm

```
npm install -g buster
```

1.6 Phantom.js
--------------

In order to run the Buster.js tests in a headless browser install the WebKit headless browser [Phantom.js][11] from http://phantomjs.org
Make sure that __$PHANTOMJS_HOME__ environment variable is set correctly and __$PHANTOMJS_HOME/bin__ is added to your __$PATH__ environment variable.

1.7 HTTP Server
---------------

It is very handy to have a simple http server right at your finger tips.

```
npm install -g http-server
```

---

#### Now you should be ready to checkout and run the exersices.


2.0 Project setup
-----------------

Checkout the source code using your git client.

```
git clone https://github.com/canoo/enterprise-js-workspace.git
```

# Exercises

This workshop contains following exercises

#### [Require JS] [1]
#### [Buster JS] [2]
#### [Backbone JS - Views] [3]
#### [Backbone JS - Models] [4]
#### [Backbone JS - MVC] [5]

  [1]: https://github.com/canoo/enterprise-js-workspace/tree/master/10-exercise-requirejs     "Require JS"
  [2]: https://github.com/canoo/enterprise-js-workspace/tree/master/30-exercise-testing       "Buster JS"
  [3]: https://github.com/canoo/enterprise-js-workspace/tree/master/50-exercise-bb-view       "Backbone Views"
  [4]: https://github.com/canoo/enterprise-js-workspace/tree/master/50-exercise-bb-model      "Backbone Model"
  [5]: https://github.com/canoo/enterprise-js-workspace/tree/master/50-exercise-bb-mvc        "Backbone MVC"

  [6]: http://git-scm.com "Git"
  [7]: http://nodejs.org "Node.js"
  [8]: http://gruntjs.com "Grunt"
  [9]: http://bower.io "Bower"
  [10]: http://busterjs.org "Buster.js"
  [11]: http://phantomjs.org "Phantom.js"
