define(['knockout', 'ojs/ojhtmlutils', 'ojs/ojbinddom'],
  function (ko, htmlUtils) {

    function BindHtmlViewModel (context) {


      //console.log(`🚀 ~  BindHtmlViewModel called with new`, !!new.target);

      let viewModel = {};

      let initConfig = { view: htmlUtils.stringToNodeArray(context.properties.value || '') };

      viewModel.domViewConfig = ko.observable(initConfig);

      viewModel.propertyChanged = function (changes) {
        if (changes.property === 'value') {
          viewModel.domViewConfig({ view: htmlUtils.stringToNodeArray(changes.value || '') });
        }
      };

      return viewModel;
    }

    return BindHtmlViewModel; //class of viewModel
});