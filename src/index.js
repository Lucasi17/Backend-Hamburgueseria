import express from "express";
import morgan from "morgan";
import cors from "cors";
//import path from "path";
import './database'

console.log("desde mi backend");

//crear la instancia de Express
const app = express();

//crear un puerto

app.set("port", process.env.PORT || 4001);

app.listen(app.get("port"), () => {
  console.log("=====================================");
  console.log("estoy en el puerto " + app.get("port"));
  console.log("=====================================");
});

//middleware
app.use(morgan("dev")); // nos da información de la consulta: status, tipo, tiempo de ejecución
app.use(cors()); // nos permite recibir peticiones remotas a nuestra API
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // estos dos ultimos nos permiten recibir e interpretar el json de la  req

app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, '../public'))) : si no funciona public


//rutas de prueba

app.get("/", (req, res) => {
  res.send("esto es una prueba desde mi backend");
});

app.delete("/borrarProducto", (req, res) => {
  res.send("se borró el producto");
});
