const express = require('express');
const app = express();
const ip = require('ip');

  console.log(ip.address());


app.get('/',function (req, res) {
    res.send('hello world');
  });

  app.get('/err',function (req, res) {
    console.log("err");

    res.send('err');
  });
  app.get('/info',function (req, res) {
    console.log("info");
    res.send('info');
  });
  
app.listen(3000)