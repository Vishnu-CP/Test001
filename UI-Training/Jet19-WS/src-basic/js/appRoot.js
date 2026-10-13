/**
 * @license
 * Copyright (c) 2014, 2026, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/**
 * A top-level require call executed by the Application.
 * Although 'knockout' would be loaded in any case (it is specified as a  dependency
 * by some modules), we are listing it explicitly to get the reference to the 'ko'
 * object in the callback
 */
require(['ojs/ojcontext','ojs/ojbootstrap', 'knockout', './appViewModel', './appUiElements'],
  function (Context,Bootstrap, ko, app) { // this callback gets executed when all required modules are loaded
    Bootstrap.whenDocumentReady().then(initApp);

    
        function initApp() {
          // Bind your ViewModel for the content of the whole page body.
          console.log("Before App Binding");
          ko.applyBindings(app);
          console.log("After App Binding");

          Context.getPageContext().getBusyContext().applicationBootstrapComplete();
        }
     
  }
);
