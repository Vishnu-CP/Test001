define(function () {
  console.log(`🚀 ~  inside sumLib define function`);

  var libName = 'Sum Lib';
  var libVer  = '1.0.0';

  function privateFun () {

  }

  function sumAll () {
    console.log(`🚀 ~  inside sumAll`);

  }
  function sumOdd () {
    console.log(`🚀 ~  inside sumOdd`);

  }
  function sumEven () {
    console.log(`🚀 ~  inside sumEvent`);
  }

  return {
    name: libName,
    version: libVer,
    sumAll,
    sumOdd,
    sumEven
  }
});

console.log(`🚀 ~  sumLib.js ends`);