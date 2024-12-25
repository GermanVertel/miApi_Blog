const { conexion } = require("./database/conexion");
const express = require('express');
const cors = require('cors');

// inicializar app
console.log('Hello, Mundo!');

// Conexión a la base de datos  
conexion();

// crear el servidor de node
const app = express();
const puerto = 4000;

// configurar cors
app.use(cors());

//convertir body a json
app.use(express.json());

// crear rutas

app.get("/probando", (req, res) => {
    console.log("se ha ejecutado la ruta probando");

    return res.status(200).json({
        "nombre": "Carlos",
        "edad": 30
    });
});

// crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log('Servidor corriendo en el puerto ' + puerto);
});