var express = require("express");
var app = express();

app.use("/store", function(req, res, next) {
  console.log("Jestem pośrednikiem przy żądaniu do /store");
  next();
});

app.get("/", function(req, res) {
  res.send("Believe in yourself, don't trust anyone !");
});

app.get("/store", function(req, res) {
  res.send("To jest sklep, możesz w nim kupić znakomitą książkę o React'ie");
});

var server = app.listen(3000, "localhost", function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Aplikacja nacłuchuje na http://" + host + ":" + port);
});