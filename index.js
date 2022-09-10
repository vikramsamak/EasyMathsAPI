const express = require("express");
const app = express();
const axios = require("axios");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const { response } = require("express");
const port = 4500;

global.result = undefined;

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "ejs");

//HOMEPAGE
app.get("/", function (req, res) {
  res.render("index");
});

//ABOUT US PAGE
app.get("/aboutus", function (req, res) {
  res.render("aboutus");
});

//CONTACT US PAGE
app.get("/contactus", function (req, res) {
  res.render("contactus");
});

//DOCS PAGE
app.get("/docs", function (req, res) {
  res.render("docs");
});

//FORM DATA ACESSING AND GETING RESPECTIVE RESPONSE FROM API(DETA CLOUD)
app.get("/calc", function (req, res) {
  const options = {
    method: "GET",
    url: "https://2432po.deta.dev/arithmatic",
    params: req.query,
  };
  axios
    .request(options)
    .then(function (response) {
      result = response.data;
      //console.log(result);
      res.send(result);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(port);
