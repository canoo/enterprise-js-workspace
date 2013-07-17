var config = module.exports;

config["Browser Tests"] = {
    rootPath   : "..",
    environment: "browser", // or "node"

    extensions: [
        require("buster-amd")
    ],

    libs: [
        "src/scripts/requirejs/require.js",
        "test/main-setup.js"
    ],

    resources: [
    ],

    sources: [
        "src/app/**/*.js",

        'src/scripts/**/*.js'
    ],

    tests: [
        "test/app/**/*-test.js"
    ]
};