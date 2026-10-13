require(['ojs/ojbootstrap', 'ojs/ojcontext', 'knockout',
  'ojs/ojhtmlutils',
  'ojs/ojknockout',
  'ojs/ojbinddom',
  'jet-cc/my-bind-html/loader',
  ],
  function (Bootstrap, Context, ko, ojHtmlUtils) {
    Bootstrap.whenDocumentReady().then( initApp );

    function initApp () {

      let pageTitleStr = 'HTML <em>Binding</em>';

      let pageTitle = ko.observable(pageTitleStr);

      // let domConfig = { view: ojHtmlUtils.stringToNodeArray(pageTitleStr) };
      let domConfig = { view: ojHtmlUtils.stringToNodeArray(pageTitle()) };

      let viewModel = {
        pageTitle,
        domConfig
      };
      ko.applyBindings(viewModel);

      // release the application bootstrap busy state
      Context.getPageContext().getBusyContext().applicationBootstrapComplete();
    }
  }
);
