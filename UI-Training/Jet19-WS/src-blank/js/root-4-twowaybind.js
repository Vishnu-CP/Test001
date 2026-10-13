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
require(['ojs/ojbootstrap', 'ojs/ojcontext', 'knockout', 'ojs/ojknockout','ojs/ojinputtext','oj-c/input-text'],
  function (Bootstrap, Context, ko) {
    Bootstrap.whenDocumentReady().then(initApp);
     
        // release the application bootstrap busy state


        function initApp(){

          var viewModel = {

             firstName : ko.observable('Vishnu Das CP')
             
          

          }

        //  var showDemoCode1= ko.obserbable(true);

          ko.applyBindings(viewModel);
          Context.getPageContext().getBusyContext().applicationBootstrapComplete();
        }
});
 
