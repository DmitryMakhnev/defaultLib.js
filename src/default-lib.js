var defaultLib = {};

defaultLib.getGlobal = require('./utils/getGlobal');
defaultLib.typesDetection = require('./utils/typesDetection');
defaultLib.getObjectKeys = require('./utils/getObjectKeys');
defaultLib.getObjectLength = require('./utils/getObjectLength');
defaultLib.cycleKeys = require('./utils/cycle/cycleKeys');
defaultLib.cycle = require('./utils/cycle/cycle');
defaultLib.reversiveCycle = require('./utils/cycle/reversiveCycle');
defaultLib.getObjectSafely = require('./utils/getObjectSafely');
defaultLib.onload = require('./utils/onload');

module.exports = defaultLib;