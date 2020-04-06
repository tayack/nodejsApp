const express = require('express');
const app = express();

app.use(require("./lib/logger.js"))

app.get('/',function (req, res) {
    res.send('hello world');
  });
app.get('/err',function (req, res) {
    res.send('err');
});
app.get('/info',function (req, res) {
    res.send('info');
});
  
app.listen(8080)