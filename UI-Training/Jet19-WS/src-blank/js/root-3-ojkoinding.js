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
require(['ojs/ojbootstrap', 'ojs/ojcontext', 'knockout', 'ojs/ojknockout'],
  function (Bootstrap, Context, ko) {
    Bootstrap.whenDocumentReady().then(initApp);
     
        // release the application bootstrap busy state


        function initApp(){

          var viewModel = {
            firstName : 'Vishnu',
            lastName : 'Das',
            userName : '007',
            showDemoCode1 : true,
            showDemoCode2 : false,
            footerLinks : [
              {name: 'About Oracle', linkId: 'aboutOracle', linkTarget:'http://www.oracle.com/us/corporate/index.html#menu-about'},
              { name: "Contact Us", linkId: "contactUs", linkTarget: "http://www.oracle.com/us/corporate/contact/index.html" },
              { name: "Legal Notices", linkId: "legalNotices", linkTarget: "http://www.oracle.com/us/legal/index.html" },
              { name: "Terms Of Use", linkId: "termsOfUse", linkTarget: "http://www.oracle.com/us/legal/terms/index.html" },
              { name: "Your Privacy Rights", linkId: "yourPrivacyRights", linkTarget: "http://www.oracle.com/us/legal/privacy/index.html" },
            ]

          }

        //  var showDemoCode1= ko.obserbable(true);

          ko.applyBindings(viewModel);
          Context.getPageContext().getBusyContext().applicationBootstrapComplete();
        }
});
 
