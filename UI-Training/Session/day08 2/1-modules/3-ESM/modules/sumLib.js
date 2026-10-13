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

// to import without { }
export default {
  name: libName,
  version: libVer,
  sumAll,
  sumOdd,
  sumEven
}
