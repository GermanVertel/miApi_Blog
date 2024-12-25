const mongoose = require('mongoose');

const conexion = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mi_blog");
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
  }
} 

module.exports = {
    conexion
}