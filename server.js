var express = require('express')
var app = express()

var submissions = [];

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/somethingelse', function (req, res) {
  res.send('<html><body><h1>Something Else</h1></body></html>')
  res.send('<html><body><h1>Adding More</h1></body></html>')
})

app.get('/formpost', function(req, res){
  console.log("They submitted: "+ req.query.textfield);
  res.send("You submitted: "+ req.query.textfield);
  submissions.push(req.query.textfield);

})

app.get('/index.html', function(req, res){
  console.log("Home");
})

app.get('display', function(req, res){
  var html = "<html><body>";
  for (var i = 0; i < submissions.length; i++){
    html = html + submissions[i] + "<br>";
  }
  html = html + "</body></html>";
  res.send(html);

})

app.listen(9000, function () {
  console.log('Example app listening on the PORT!')
})
