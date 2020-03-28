const express = require('express');
const app = express();
const ip = require('ip');

  console.log(ip.address());


app.get('/',function (req, res) {
    res.send('hello world');
  });
app.listen(3000)