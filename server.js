const express = require('express');
const port = process.env.PORT || 8080;
const uaparser = require('ua-parser');

var app = express();
app.enable('trust proxy');

app.get('/', (req, res) => {
  res.send("Use /api to return IP, Language, and OS");
});

app.get('/api', (req, res) => {
  resObject = {};
  resObject.IP = req.ip;
  resObject.Language = req.acceptsLanguages()[0];
  resObject.OS = uaparser.os.toString();
  res.send(resObject);
});

app.listen(port, () => {
  console.log("listening on " + port);
});