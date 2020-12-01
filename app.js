// HERE IS ONLY SERVER SIDE JS  !!!
const express = require("express");
const hbs = require("hbs");
const app = express();

// define our public folder : where our static assets are located (static assests : images, css, dom scripts, videos ...)
app.use(express.static(__dirname + "/public"));

// let's configure the templating engine :)
// setup the views folder
app.set("views", __dirname + "/views");
// hey app, the views will be rendered with hbs as a templating engine
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/recipe", (req, res) => {
  res.render("recipe");
});

app.listen(3000, () => {
  console.log("server is ready ! http://localhost:3000");
});
