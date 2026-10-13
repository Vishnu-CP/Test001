var apiLib = (function () {
  var libName = 'Api Lib';
  var libVer  = '2.0.0';

  function get () {
    console.log(`🚀 ~  inside api get`);

  }
  function post () {
    console.log(`🚀 ~  inside api post`);
  }
  function ajax () {
    console.log(`🚀 ~  inside api ajax`);
  }

  return {
    name: libName,
    version: libVer,
    ajax,
    get,
    post
  };

})();