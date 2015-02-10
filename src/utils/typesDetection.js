
var typesDetection = {},
    toString = Object.prototype.toString;

typesDetection.isArray = Array.isArray || function (verifiable) {
    return toString.call(verifiable) === '[object Array]';
};

typesDetection.isNodesCollection = function (verifiable) {
    return document
        && ((verifiable instanceof HTMLCollection)
            || (verifiable instanceof NodeList));
};

var types = ['Object', 'Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Boolean'],
    i = types.length;

function createTypeDetector (typeName) {
    return function (verifiable) {
        return toString.call(verifiable) === '[object ' + typeName + ']';
    }
}

for (; i-- ;){
    typesDetection['is' + types[i]] = createTypeDetector(types[i]);
}

typesDetection.isCollection = function (verifiable) {
    return typesDetection.isArray(verifiable)
        || typesDetection.isNodesCollection(verifiable)
        || typesDetection.isArguments(verifiable);
};

module.exports = typesDetection;