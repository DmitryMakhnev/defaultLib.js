var defaultLib = require('../../src/default-lib.js');
var global = defaultLib.getGlobal();
var result;

defaultLib.cycle([0], function () {
    result = this;
});

console.log(defaultLib.typesDetection.isNodesCollection(''));

console.log(global === result);