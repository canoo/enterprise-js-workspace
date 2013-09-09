var config = module.exports;


// configuration which is used during development
config["Browser"] = {

    rootPath   : "..",

    environment: "browser",

    // setup extensions to use with this config
    extensions: [
        require("buster-amd")
    ],

    libs: [
        "src/scripts/requirejs/require.js",
        "test/main-setup.js"
    ],

    resources: [
    ],

    // since we are using bower.js now for dependencies we list all libs explicitly.
    // otherwise all kind of git repository sources would be uploaded to the browser
    sources: [
        "src/app/**/*.js",

        'src/scripts/handlebars/handlebars.js',
        'src/scripts/backbone/backbone.js',
        'src/scripts/layoutmanager/backbone.layoutmanager.js',
        'src/scripts/jquery/jquery.js',
        'src/scripts/requirejs-text/text.js',
        'src/scripts/underscore/underscore.js',
        'src/scripts/moment/moment.js',
        'src/scripts/movejs/move.js'
    ],

    tests: [
        "test/app/**/*-test.js"
    ]
};

// configuration which is used to run on the ci server
config["CI"] = {

    // extend all settings from the development config
    extends: 'Browser',

    // setup extensions to use with this config
    extensions: [
        require("buster-amd"),
        require("buster-istanbul")
    ],

    "buster-istanbul": {
        outputDirectory: "build/reports/coverage",
        format         : "lcov" // other format options cov, cobertura, json, text, text-summary
    }
};