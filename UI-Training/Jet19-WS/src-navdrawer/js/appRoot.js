
 require(['ojs/ojcontext','ojs/ojbootstrap', './appViewModel','./appUiElements',],
 function (Context,Bootstrap, ko, app) { // this callback gets executed when all required modules are loaded
   Bootstrap.whenDocumentReady().then(initApp())
    
      function initApp() {
        // Bind your ViewModel for the content of the whole page body.
        ko.applyBindings(app, document.getElementById('globalBody'));
        // release the application bootstrap busy state
        Context.getPageContext().getBusyContext().applicationBootstrapComplete();

      }
      
    });
 
