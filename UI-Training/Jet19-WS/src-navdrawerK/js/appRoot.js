define(['ojs/ojcontext', 'ojs/ojbootstrap', './appViewModel', './appUiElements'],
  function (Context, Bootstrap, appViewModel) {
    Bootstrap.whenDocumentReady().then( initApp );

    function initApp() {
      // Bind your ViewModel for the content of the whole page body.
      ko.applyBindings(appViewModel);

      // release the application bootstrap busy state
      Context.getPageContext().getBusyContext().applicationBootstrapComplete();
    }
  }
);