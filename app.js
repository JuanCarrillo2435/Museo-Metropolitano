const express = require("express");
const app = express();
const path = require("path");
const dirname = path.join("src/");
const indexController = require("./src/controllers/index.controllers.js");
const searchRoute = require('./src/routes/search.routes.js')
const detailRoute = require('./src/routes/detail.routes.js')

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("views"));
app.get("/", indexController.renderHomePage);
app.use('/search',searchRoute)
app.use('/details',detailRoute)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo salió mal.");
});

console.log("Servidor escuchando en el puerto 3000");
app.listen(3000);
