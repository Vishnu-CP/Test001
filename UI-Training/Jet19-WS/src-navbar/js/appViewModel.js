/* appViewModel to apply to index.html */
define([
  './appGlobal',
  'ojs/ojresponsiveutils',
  'ojs/ojresponsiveknockoututils',

  'ojs/ojcorerouter',
  'ojs/ojmodulerouter-adapter',
  'ojs/ojknockoutrouteradapter',

  'ojs/ojurlparamadapter',
  'ojs/ojarraydataprovider',
  'ojs/ojknockouttemplateutils',

  ],
  function(
    _g,  ResponsiveUtils, ResponsiveKnockoutUtils,
    CoreRouter, ModuleRouterAdapter, KnockoutRouterAdapter,
    UrlParamAdapter, ArrayDataProvider, KnockoutTemplateUtils) {

      // Handle announcements sent when pages change, for Accessibility.
      let manner = ko.observable('polite');
      let message = ko.observable();

      let announcementHandler = (event) => {
          message(event.detail.message);
          manner(event.detail.manner);
      };

      oj$('#globalBody').addEventListener('announce', announcementHandler, false);

      // Media queries for responsive layouts
      const smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      let smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

      let navData = [
        { path: '', redirect: 'dashboard' },
        { path: 'dashboard', detail: { label: 'Dashboard', iconClass: 'oj-ux-ico-bar-chart' } },
        { path: 'incidents', detail: { label: 'Incidents', iconClass: 'oj-ux-ico-fire' } },
        { path: 'customers', detail: { label: 'Customers', iconClass: 'oj-ux-ico-contact-group' } },
        { path: 'about', detail: { label: 'About', iconClass: 'oj-ux-ico-information-s' } }
      ];
      // Router setup
      let router = new CoreRouter(navData, { urlAdapter: new UrlParamAdapter() });
      router.sync();

      let moduleAdapter = new ModuleRouterAdapter(router);
      let selection = new KnockoutRouterAdapter(router);

      // Setup the navDataProvider with the routes, excluding the first redirected
      // route.
      let navDataProvider = new ArrayDataProvider(navData.slice(1), {keyAttributes: "path"});

      // Header
      let appName = ko.observable("App Name"); // Application Name used in Branding Area
      let userLogin = ko.observable("john.hancock@oracle.com"); // User Info used in Global Navigation area

      // Footer
      let footerLinks = [
        { name: "About Oracle",        linkId: "aboutOracle",       linkTarget: "http://www.oracle.com/us/corporate/index.html#menu-about"},
        { name: "Contact Us",          linkId: "contactUs",         linkTarget: "http://www.oracle.com/us/corporate/contact/index.html" },
        { name: "Legal Notices",       linkId: "legalNotices",      linkTarget: "http://www.oracle.com/us/legal/index.html" },
        { name: "Terms Of Use",        linkId: "termsOfUse",        linkTarget: "http://www.oracle.com/us/legal/terms/index.html" },
        { name: "Your Privacy Rights", linkId: "yourPrivacyRights", linkTarget: "http://www.oracle.com/us/legal/privacy/index.html" },
      ];

     // export viewModel properties
     return {
       KnockoutTemplateUtils,
       manner,
       message,
       smScreen,
       moduleAdapter,
       selection,
       navDataProvider,
       appName,
       userLogin,
       footerLinks,

     };
  }
);
