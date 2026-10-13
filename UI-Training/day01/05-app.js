// 05-app.js

console.log(`🚀 ~  base node script begins`);

// 1st time
var sumLib1 = require('./modules/sumLib');
console.log('🚀 ~ sumLib1', sumLib1);

// 2nd time
var sumLib2 = require('./modules/sumLib');
console.log('🚀 ~ sumLib2', sumLib2);

console.log(`🚀 ~  global.libName`, global.libName);
console.log(`🚀 ~  global.testName`, global.testName);

// console.log(`🚀 ~  libName`, libName);
console.log(`🚀 ~  global.sumLibVer`, global.sumLibVer);