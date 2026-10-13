// 01-node-script.js

console.log('Hello Node Script');

console.log('🚀 ~ global', global); //something similar to "window" in browser JS
console.log('🚀 ~ globalThis', globalThis); // ES2020+ universal "window" in browser JS, "global" in Node JS

console.log('🚀 ~ __filename', __filename);

console.log('🚀 ~ __dirname', __dirname);

console.log('🚀 ~ platform', process.platform); // win32, darwin

console.log(`🚀 ~  module`, module);
console.log(`🚀 ~  exports`, exports);
console.log(`🚀 ~  module.exports === exports `, (module.exports === exports) );

console.log('🚀 ~ myName', myName);
var myName = 'nodejs';
console.log('🚀 ~ myName', myName);

console.log('🚀 ~ globalThis.myName', globalThis.myName);
console.log('🚀 ~ globalThis.myName', global.myName);