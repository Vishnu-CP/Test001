/* appViewModel for index.html */
define(['./appGlobal', 'ojs/ojknockouttemplateutils',
  'ojs/ojcorerouter', 'ojs/ojmodulerouter-adapter',
  'ojs/ojknockoutrouteradapter', 'ojs/ojurlparamadapter',
  'ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils',
  'ojs/ojarraydataprovider', 'ojs/ojdrawerpopup',
  'ojs/ojmodule-element', 'ojs/ojknockout'],
  function(_g,  KnockoutTemplateUtils,
    CoreRouter, ModuleRouterAdapter,
    KnockoutRouterAdapter, UrlParamAdapter,
    ResponsiveUtils, ResponsiveKnockoutUtils,
    ArrayDataProvider) {

    function ControllerViewModel() {

      this.KnockoutTemplateUtils = KnockoutTemplateUtils;

      // Handle announcements sent when pages change, for Accessibility.
      this.manner  = ko.observable('polite');
      this.message = ko.observable();

      let announcementHandler = (event) => {
          this.message(event.detail.message);
          this.manner(event.detail.manner);
      };

      oj$('#globalBody').addEventListener('announce', announcementHandler, false);

      // Media queries for responsive layouts
      const smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      this.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
      const mdQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
      this.mdScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);

      let navData = [
        { path: '', redirect: 'customers' },
        { path: 'dashboard', detail: { label: 'Dashboard', iconClass: 'oj-ux-ico-bar-chart' } },
        { path: 'incidents', detail: { label: 'Incidents', iconClass: 'oj-ux-ico-fire' } },
        { path: 'customers', detail: { label: 'Customers', iconClass: 'oj-ux-ico-contact-group' } },
        { path: 'about',     detail: { label: 'About',     iconClass: 'oj-ux-ico-information-s' } }
      ];

      // Router setup
      let router = new CoreRouter(navData, { urlAdapter: new UrlParamAdapter() });
      router.sync();

      this.moduleAdapter = new ModuleRouterAdapter(router);
      this.selection = new KnockoutRouterAdapter(router);

      // Setup the navDataProvider with the routes, excluding the first redirected route.
      this.navDataProvider = new ArrayDataProvider(navData.slice(1), {keyAttributes: "path"});

      // Drawer
      self.sideDrawerOn = ko.observable(false);

      // Close drawer on medium and larger screens
      this.mdScreen.subscribe(() => { self.sideDrawerOn(false) });

      // Called by navigation drawer toggle button and after selection of nav drawer item
      this.toggleDrawer = () => { self.sideDrawerOn(!self.sideDrawerOn()); }

      // Header
      this.appName = ko.observable("[navdrawer]"); // Application Name used in Branding Area
      this.userLogin = ko.observable("pilotK.jet@web.com"); // User Info used in Global Navigation area

      // Footer
      this.footerLinks = [
        { name: "About Oracle",        linkId: "aboutOracle",       linkTarget: "http://www.oracle.com/us/corporate/index.html#menu-about" },
        { name: "Contact Us",          linkId: "contactUs",         linkTarget: "http://www.oracle.com/us/corporate/contact/index.html" },
        { name: "Legal Notices",       linkId: "legalNotices",      linkTarget: "http://www.oracle.com/us/legal/index.html" },
        { name: "Terms Of Use",        linkId: "termsOfUse",        linkTarget: "http://www.oracle.com/us/legal/terms/index.html" },
        { name: "Your Privacy Rights", linkId: "yourPrivacyRights", linkTarget: "http://www.oracle.com/us/legal/privacy/index.html" },
      ];
    }

    return new ControllerViewModel();
  }
);
