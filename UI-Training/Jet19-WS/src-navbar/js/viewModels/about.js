/* about ViewModel code  */
define(['../accUtils', 'ojs/ojconverterutils-i18n'],
 function(accUtils, ojconverterutils_i18n_1) {
    function AboutViewModel() {

      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      // Step-1
      // this.firstName = "Amy";
      // this.lastName  = "Bartlett";
      // this.initials  = ojconverterutils_i18n_1.IntlConverterUtils.getInitials(this.firstName, this.lastName);
      // this.avatar    = "https://reqres.in/img/faces/2-image.jpg";

      this.firstName = ko.observable("Amy");
      this.lastName  = ko.observable("Bartlett");
      this.avatar    = ko.observable("https://reqres.in/img/faces/2-image.jpg");
      this.shape     = ko.observable('square');
      this.initials  = ko.pureComputed(function () {
        return ojconverterutils_i18n_1.IntlConverterUtils.getInitials(this.firstName(), this.lastName());
      }, this);

      var self = this;
      function updateProfile ( profile ) {
        self.firstName(profile.firstName);
        self.lastName(profile.lastName);
        self.avatar(profile.avatar);
        self.shape(profile.shape || 'circle');
      }

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('About page loaded.');
        document.title = "About";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed

        let apiUrl = 'https://elevatecore.in/api/users/1';

        setTimeout(async () => {

          userProfile = await fetch(apiUrl).then(r=>r.json());

          console.log('🚀 ~ userProfile', userProfile);
          updateProfile(userProfile);

        }, 3000);

      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return AboutViewModel;
  }
);
