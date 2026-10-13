// modules/sumLib.js (CJS: Common JS module)

console.log(`🚀 ~  inside sumLib.js module`, module);
console.log(`🚀 ~  inside sumLib.js exports`, exports);

console.log(`🚀 ~  module.exports === exports `, (module.exports === exports) );

var verions = '1.0.0';
var libName = 'Sum Lib';
console.log('🚀 ~ libName', libName);
console.log('🚀 ~ global.libName', global.libName);

global.testName = 'Node Module';

function sumAll () {}

function sumOdd () {}

function sumEvn () {}

Object.defineProperty(global, 'sumLibVer', {
  value: '1.0.0',
  writable: false,
  configurable: false,
  enumerable: false
});


// exports = {};
// module.exports = exports;
// module.exports = exports = {};

// exports.sumAll = sumAll;
// exports.sumEvn = sumEvn;

// module.exports.sumAll = sumAll;
// module.exports.sumOdd = sumOdd;

module.exports = {
  sumAll,
  sumOdd,
  sumEvn
};