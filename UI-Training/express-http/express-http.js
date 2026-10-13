const path    = require('path');
const cors    = require('cors');
const express = require('express'); // return function
const app     = express();          // return object

const PORT_HTTP = 5050;

// ---------------------------------
// express middlewares
app.use( cors() );
app.use( express.static(path.join(__dirname, 'web')) );
app.use( express.urlencoded({extended:true, limit: '5mb'}) );
app.use( express.json({limit: '5mb'}) );

// specific request handling
app.get('/file-x', function (req, res) {
  res.status(200).set('content-type', 'text/html');
  res.sendFile( __dirname + '/secured/' + 'file-01.html' );
});

app.get('/api/user', function (req, res) {

  var dataObj = {
    id    : 10001,
    msg   : 'Hello Express',
    params: req.query
  };

  res.json( dataObj );
});

// start express service
app.listen(PORT_HTTP, () => {
  console.log(`Express HTTP started. visit http://localhost:${PORT_HTTP}/`);
});