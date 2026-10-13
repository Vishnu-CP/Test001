
'use strict';

var oj_whenReady = true;
require.config(
  {
    baseUrl: 'js',
    
    paths: 
    // injector:mainReleasePaths
    {}
    // endinjector


  }
);

require(['./root'], function(){
  console.log('Appln Started.');
});
