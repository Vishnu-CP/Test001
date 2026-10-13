
'use strict';

    window["oj_whenReady"] = true;

    requirejs.config(
    {
      baseUrl: 'js',

      paths:
      /* DO NOT MODIFY
      ** All paths are dynamicaly generated from the path_mappings.json file.
      ** Add any new library dependencies in path_mappings json file
      */
      // injector:mainReleasePaths
      {
        
      }
      // endinjector
    }
  );

/**
 * Load the application's entry point file
 */
require(['./appRoot'],function (){
  console.log('App is ready....');
});
