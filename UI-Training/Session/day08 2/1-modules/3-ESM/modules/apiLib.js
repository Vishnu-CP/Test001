var libName = 'Api Lib';
var libVer  = '2.0.0';

// import within { } / named export
export function get () {
  console.log(`🚀 ~  inside api get`);
}

// import within { } / named export
export function post () {
  console.log(`🚀 ~  inside api post`);
}

function ajax () {
  console.log(`🚀 ~  inside api ajax`);
}

// to import without { }
export default {
  name: libName,
  version: libVer,
  ajax
};
