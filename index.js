// index.js
// 1. IMPORTACIONES

const express = require("express");
const app = express();
const hbs = require("hbs");

const connectingDB = require("./config/db");

// 2. MIDDLEWARES

// a. ACTIVAMOS VARIABLES DE ENTORNO (DOTENV)
require("dotenv").config();

// b. ACTIVAMOS BASE DE DATOS
connectingDB();

// c. ACTIVAMOS CARPETA EN PUBLIC
app.use(express.static(__dirname + "/public"));

// d. ACTIVAMOS CARPETA DE VISTAS
app.set("view engine", "hbs");

// e. ACTIVAR RECEPCIÓND E DATOS EN FORMULARIOS
app.use(express.urlencoded({ extended: true }));

// 3. RUTEO

app.use("/posts", require("./routes/post"));

app.get("/", (req, res) => {
  res.send("Estamos listos");
});

// 4. SERVIDOR
app.listen(process.env.PORT, () => {
  console.log(`Svr activado: ${process.env.PORT}`);
  return;
});
