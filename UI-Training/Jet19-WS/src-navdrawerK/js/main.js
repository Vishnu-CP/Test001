'use strict';

// The "oj_whenReady" global variable enables a strategy that the busy context whenReady,
// will implicitly add a busy state, until the application calls applicationBootstrapComplete
// on the busy state context.
let oj_whenReady = true;

// global shortcuts
const oj$  = document.querySelector.bind(document);
const oj$$ = selector => Array.from(document.querySelectorAll(selector));

requirejs.config({
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
});


/**
 * Load the application's entry point file
 */
require(['./appRoot']);
