var http = require('http');    // 1 - Import Node.js core module

var port = 8080;

http.createServer(handleReq)   // 2 - creating server with requestHandler
    .listen(port, ()=>{        // 3 - listen for any incoming requests
      console.log(`Node.js web server is running. Visit http://localhost:${port}/`);
    });

// ---------------------------------------------------------

function handleReq (req, res) {

  console.log('handling incoming request:', req.url);

  switch (req.url) {

    case '/' :
      // set response header
      res.writeHead(200, { 'Content-Type': 'text/html' });

      // set response content
      res.write('<html><body><p>This is home Page.</p></body></html>');
      res.end();
      break;

    case '/json' :
      // res.writeHead(200, { 'Content-Type': 'application/json' });
      res.setHeader('Content-Type', 'application/json');

      var dataObj = { message: "Hello World" };

      // res.write( JSON.stringify(dataObj) );
      // res.end();

      res.end(JSON.stringify( dataObj ));
      break;

    default:
      // set response header
      res.writeHead(200, { 'Content-Type': 'text/html' });
      // set response content
      res.write('<html><body><p>INVALID Request</p></body></html>');
      res.end();
      break;
  }

}