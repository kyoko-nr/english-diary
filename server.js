const express = require('express');
const serveStatic = require('serve-static');
const app = express();
app.use(serveStatic(__dirname + "/build"));
const port = process.env.PORT || 8000;
app.listen(port);
console.log('server started '+ port);
