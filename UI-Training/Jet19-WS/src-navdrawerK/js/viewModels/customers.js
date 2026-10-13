/* customer ViewModel */
define([
  '../accUtils',
  'ojs/ojarraydataprovider',
  'ojs/ojmodule-element-utils',
  ],
  function(accUtils, ArrayDataProvider, moduleUtils) {

    let apiUrl   = 'js/mockData/customers.json';
    let apiDelay = 2000;
    let useOjx   = false;

    function CustomersViewModel() {
      const vm = {};

      vm.isLoading = ko.observable(true);

      vm.custDataProvider = ko.observable(new ArrayDataProvider([], {
          keyAttributes: 'id',
          implicitSort: [{ attribute: 'id', direction: 'ascending' }]
      }));
      vm.custColumns = [
        { "headerText": "Id",
          "field": "id",
          "headerClassName": "oj-sm-only-hide",
          "className": "oj-sm-only-hide",
          "resizable": "enabled",
          "id": "id"
        },
        { "headerText": "Full Name",
          "field": "firstName",
          "resizable": "enabled",
          "id": "fullName",
          renderer: function (ctx) {
            return {insert: ctx.row.firstName + ' ' + ctx.row.lastName};
          }
        },
        { "headerText": "Email",
          "field": "email",
          "resizable": "enabled",
          "id": "email"
        },
        { "headerText": "avatar",
          "field": "avatar",
          "headerClassName": "oj-md-down-hide",
          "className": "oj-md-down-hide",
          "resizable": "enabled",
          "id": "avatar",
          "sortable":false,
          template: 'tmplAvatar'
        }
      ];

      vm.renderEditPanel = ko.observable();
      vm.editPanelUi     = ko.observable();
      vm.selectedRow     = ko.observable();
      vm.selectedUser    = ko.observable();

      vm.editPanelData = ko.pureComputed(function () {
        return {
          updateCust: updateCust,
          closePopup: vm.slideOutToggle,
          cust: vm.selectedUser()
        }
      });

      vm.isRowSelected = ko.pureComputed(function () {
        let selectedRow = vm.selectedRow();
        let isSelected  = selectedRow && selectedRow.key;
        // console.log('🚀 ~ selectedRowCtx', selectedRow);
        vm.selectedUser(isSelected? selectedRow.data : {});
        return isSelected;
      });

      function getCustomers () {
        vm.selectedRow(undefined);
        vm.isLoading(true);

        setTimeout(async () => {
          let customers = await fetch(apiUrl).then(r=>r.json());
          vm.isLoading(false);
          updateCustomers(customers);
        }, apiDelay);
      }

      function updateCustomers (customers) {
        vm.custDataProvider(new ArrayDataProvider(customers, {
          keyAttributes: 'id',
          implicitSort: [{ attribute: 'id', direction: 'ascending' }]
        }));
      }

      function updateCust ( cust ) {
        console.log(`🚀 ~  updateCust`, cust);
      }

      vm.editCustConfig = ko.observable({view: [], viewModel: null});

      vm.openPopup = function () {
        document.getElementById('editPopup').open();
      };
      vm.closePopup = function () {
        vm.renderEditPanel(false);
        document.getElementById('editPopup').close();
      };

      vm.slideOutOpened = ko.observable(false);
      vm.slideOutToggle = () => vm.slideOutOpened(!vm.slideOutOpened());

      vm.handleUpdateSlide = () => {
        let selectedRow = vm.selectedRow();
        if (selectedRow && selectedRow.key) {
          vm.editPanelUi('customers/edit-slide');
          vm.selectedUser(selectedRow.data);
          vm.renderEditPanel(true);
          vm.slideOutToggle();
        }
      };

      vm.handleUpdatePop = () => {
        // console.log(`🚀 ~  TODO update`);
        let selectedRow = vm.selectedRow();
        // console.log('🚀 ~ selectedRow', selectedRow);

        if (selectedRow && selectedRow.key) {
          // console.log(`🚀 ~  Show Edit Panel`);
          // vm.openMsgDlg('Working on it!');
          let params = {
            updateCust: updateCust,
            closePopup: vm.closePopup,
            cust: selectedRow.data
          };

          if (useOjx && window['ojx']) {
            vm.editCustConfig(ojx.moduleConfig('customers/edit-popup', params));
          } else {
            // ojModuleConfig Option1
            // let moduleConfigA = moduleUtils.createConfig({
            //   viewPath     : `views/customers/edit-popup.html`,
            //   viewModelPath: `viewModels/customers/edit-popup`,
            //   params
            // });
            // vm.editCustConfig(moduleConfigA);

            // ojModuleConfig Option2
            let moduleConfigB = moduleUtils.createConfig({name:'customers/edit-popup', params});
            vm.editCustConfig(moduleConfigB);
          }

          vm.openPopup();
        } else {
          // console.log(`🚀 ~  Select a row first!`);
          vm.openMsgDlg('Select a customer first!');
        }
      };

      vm.handleRemove = () => {
        // console.log(`🚀 ~  TODO remove`);
        // vm.openMsgDlg('Working on it!');
        let selectedRow = vm.selectedRow();
        if (selectedRow && selectedRow.key) {
          let cust = selectedRow.data;
          vm.confirm(`Are you sure you want to remove the selected customer [ ${cust.firstName} ]'s record?`);
        }
      };

      vm.dlgMessage = ko.observable('');
      vm.closeMsgDlg = () => {
        document.getElementById('msgDialog').close();
      };
      vm.openMsgDlg = (msg) => {
        vm.dlgMessage(msg);
        document.getElementById('msgDialog').open();
      };

      vm.confirmMessage = ko.observable('');
      vm.confirm = (confirmMsg) => {
        vm.confirmMessage(confirmMsg);
        document.getElementById('confirmDialog').open();
      };

      vm.onConfirm = () => {
        vm.closeConfirm();

        const selectedRow = vm.selectedRow();
        // console.log('🚀 ~ selectedRow', selectedRow);

        const selectedCust = selectedRow.data;

        if (selectedRow && selectedRow.key) {
          vm.openMsgDlg(`Working on it... deleting ${selectedCust.firstName}!`);

          // TODO: make delete API call and proceed with response.

          setTimeout(() => {
            vm.closeMsgDlg();
            getCustomers();
          }, 3000);
        } else {
          vm.openMsgDlg('Something went wrong!');
        }
      };
      vm.closeConfirm = () => {
        document.getElementById('confirmDialog').close();
      };

      vm.connected = () => {
        accUtils.announce('Customers page loaded.', 'assertive');
        document.title = "Customers";
        // Implement further logic if needed
      };

      vm.disconnected = () => {
        // Implement if needed
      };

      vm.transitionCompleted = () => {
        // Implement if needed
        getCustomers();
      };

      return vm;
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return CustomersViewModel();

  }
);
