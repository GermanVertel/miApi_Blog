const { conexion } = require("./database/conexion");
const express = require('express');
const cors = require('cors');

// inicializar app
console.log('Hello, Mundo!');

// Conexión a la base de datos  
conexion();

// crear el servidor de node
const app = express();
const puerto = 3900;

// configurar cors
app.use(cors());

//convertir body a json
app.use(express.json());

// crear rutas

// crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log('Servidor corriendo en el puerto ' + puerto);
});