const express = require('express');
const port = process.env.PORT || 8080;

var app = express();

app.get('/api', (req, res) => {
  resObject = {};
  resObject.Languages = req.acceptsLanguages();
  res.send(resObject);
});

app.listen(port, () => {
  console.log("listening on " + port);
});