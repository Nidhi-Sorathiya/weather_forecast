const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

const staticpath = path.join(__dirname, "../public");
const tempath = path.join(__dirname, "../templates/views");
const parpath = path.join(__dirname, "../templates/partial");

app.set("view engine", "hbs");
app.set("views", tempath);
hbs.registerPartials(parpath);
app.use(express.static(staticpath));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404err");
});

app.listen(port, () => {
  console.log("listen");
});
