/* Accessibility utils */
define([],
  function () {
    /**
     * Method for sending notifications to the aria-live region for Accessibility.
     * Sending a notice when the page is loaded, as well as changing the page title
     * is considered best practice for making Single Page Applications Accessbible.
     */
    const validAriaLiveValues = ['off', 'polite', 'assertive'];

    let announce = function (message, manner) {

      if (manner == undefined || !validAriaLiveValues.includes(manner)) {
        manner = 'polite';
      }

      let params = {
        'bubbles': true,
        'detail': { message, manner }
      };
      oj$('#globalBody').dispatchEvent(new CustomEvent('announce', params));
    }

    return { announce };
  }
);
