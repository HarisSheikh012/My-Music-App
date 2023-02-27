const express = require("express");
const app = express();
const port = 9000;
const path = require("path");
const hbs = require("hbs");
// For Join Path with Public Folder
const publicpath = path.join(__dirname, "./public");
const handlepath = path.join(__dirname, "./handlebars");
const partialspath = path.join(__dirname, "./partials");
// to set vew angine handlebars to join
app.set("view engine", "hbs");
app.set("views", handlepath);
hbs.registerPartials(partialspath);
// for css and images static path use
app.use(express.static(publicpath));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("*", (req, res) => {
  res.render("404");
});
app.listen(port, () => {
  console.log(`Listening to the port at ${port}`);
});
