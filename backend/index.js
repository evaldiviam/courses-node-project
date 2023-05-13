import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import cursosRoutes from "./routes/cursosRoutes.js";
import categoriasRoutes from "./routes/categoriasRoutes.js"

// Conexión BD
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cursospro');

const app = express();
app.use(express.json());

// Habilitar bodyparser (de esta manera podemos leer "form-data" como "x-www-form-ulrencoded")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar cors
app.use(cors());

// Rutas
app.use("/api", cursosRoutes);
app.use("/api", categoriasRoutes);

// Puerto
app.listen(8800, () => {
  console.log("Connected!");
});