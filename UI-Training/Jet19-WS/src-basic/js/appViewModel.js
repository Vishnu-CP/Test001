/**
 * @license
 * Copyright (c) 2014, 2026, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your application specific code will go here
 */
define(['./appGlobal', 'ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils', 'ojs/ojknockout'],
  function(_g, ResponsiveUtils, ResponsiveKnockoutUtils) {

     console.log('global' ,_g);

      // Media queries for responsive layouts
      const smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      let smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

      // Header
      // Application Name used in Branding Area
      let  appName = ko.observable("App Name");
      // User Info used in Global Navigation area
      let userLogin = ko.observable("john.hancock@oracle.com");

      // Footer
      let  footerLinks = [
        {name: 'About Oracle', linkId: 'aboutOracle', linkTarget:'http://www.oracle.com/us/corporate/index.html#menu-about'},
        { name: "Contact Us", id: "contactUs", linkTarget: "http://www.oracle.com/us/corporate/contact/index.html" },
        { name: "Legal Notices", id: "legalNotices", linkTarget: "http://www.oracle.com/us/legal/index.html" },
        { name: "Terms Of Use", id: "termsOfUse", linkTarget: "http://www.oracle.com/us/legal/terms/index.html" },
        { name: "Your Privacy Rights", id: "yourPrivacyRights", linkTarget: "http://www.oracle.com/us/legal/privacy/index.html" },
      ];

      let selectedMenuItem = ko.observable('(None selected yet)');
       let menuItemAction = (event) => {
                  selectedMenuItem(event.detail.selectedValue);
              };
              
        
       
     return {
      
      smScreen,
      appName,
      userLogin,
      footerLinks,
      selectedMenuItem,
      menuItemAction


     }
    }
  
);
