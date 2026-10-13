define(['ojs/ojcomposite', './viewModel', 'text!./view.html', 'text!./component.json', 'css!./styles'],
  function(ojcomposite, viewModel, view, metadataJSON) {
    let metadata = JSON.parse(metadataJSON);
    ojcomposite.register(metadata.name, {view, viewModel, metadata});
  }
);