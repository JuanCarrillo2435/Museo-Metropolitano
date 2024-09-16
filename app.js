const express = require ('express');
const app = express();
const path = require("path");
const dirname = path.join("src/");
const cors = require('cors');
const routes = require('./src/routes/index.routes.js');
const exhibitionRoutes = require ('./src/routes/exhibition.routes.js')

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/", express.static("public"));
app.set('view engine','ejs');
app.use(express.static("views"));
// app.use(cors());
// app.set("views", path.join(dirname, "views"));
app.use('/exhibition', exhibitionRoutes);
// app.use("/", routes.routesInit());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal.');
});


console.log("Servidor escuchando en el puerto 3000");
app.listen(3000);
