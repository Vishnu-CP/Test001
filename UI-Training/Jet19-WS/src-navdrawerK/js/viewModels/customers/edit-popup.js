// ui elements' modules are loaded in appUiElements.js
define([],
  function () {

    function EditCustPopModel (params) {
      let vm = {};

      vm.cust  = params.cust;

      vm.saveHandler = () => {
        params.updateCust(vm.cust);
        vm.cancelHandler();
      }

      vm.cancelHandler = () => {
        params.closePopup();
      }

      return vm;
    }

    return EditCustPopModel;
  }
)