define(['jquery', 'knockout'], function ($, ko) {

  // let _g = window;
  // _g.$  = $;
  // _g.ko = ko

  Object.defineProperties(window, {
    $ : { value: $ , writable:false, configurable:false, enumerable:false },
    ko: { value: ko, writable:false, configurable:false, enumerable:false },
  });

  return {$, ko};
});