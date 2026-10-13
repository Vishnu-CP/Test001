require(['ojs/ojbootstrap', 'ojs/ojcontext', 'knockout',
  'ojs/ojknockout','ojs/ojbutton'
  ],
  function (Bootstrap, Context, ko) {
    Bootstrap.whenDocumentReady().then( initApp );

    function initApp () {

      let timer;
      let time       = ko.observable(Date());
      let clockState = ko.observable(false);

      function startTimer () {

        timer && clearInterval(timer);

        timer = setInterval(() => {
          time(Date());
          updateState();
        }, 1000);

      }

      function stopTimer () {
        timer && clearInterval(timer);
        timer = null;
        updateState();
      }

      function updateState () {
        return clockState( !!timer );
      }

      var viewModel = {
        time,
        startTimer,
        stopTimer,
        clockState
      };
      ko.applyBindings(viewModel);

      // startTimer();

      // release the application bootstrap busy state
      Context.getPageContext().getBusyContext().applicationBootstrapComplete();
    }
  }
);
