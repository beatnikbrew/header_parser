const express = require('express');
const port = process.env.PORT || 8080;

var app = express();
app.enable('trust proxy');

app.get('/', (req, res) => {
  res.send("Use /api to return IP, Language, and OS");
});

app.get('/api', (req, res) => {
  resObject = {};
  resObject.IP = req.ip;
  resObject.Language = req.acceptsLanguages()[0];
  res.send(resObject);
});

app.listen(port, () => {
  console.log("listening on " + port);
});