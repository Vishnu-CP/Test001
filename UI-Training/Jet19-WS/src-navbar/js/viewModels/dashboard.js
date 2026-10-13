/*  dashboard ViewModel */
define(['../accUtils', 'ojs/ojarraydataprovider', 'text!mockData/barChart.json'],
 function(accUtils, ArrayDataProvider, chartDataJson) {
    // function DashboardViewModel() {
    class DashboardViewModel {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.
constructor(){
      this.stackValue       = ko.observable('off');
      this.orientationValue = ko.observable('vertical');
      this.dataProvider     = new ArrayDataProvider(JSON.parse(chartDataJson), {
          keyAttributes: 'id'
          
      });

      }
      disconnected = () => {
        // Implement if needed
         console.log('disconnected');

      };

       

       connected = () => {
        accUtils.announce('Dashboard page loaded.');
        document.title = "Dashboard";
        // Implement further logic if needed

        console.log('connected');
      };

       transitionCompleted = () => {
        // Implement if needed
        console.log('transitionCompleted');
      };

      
      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
    

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return new DashboardViewModel;
  }
);
