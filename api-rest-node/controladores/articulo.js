const prueba = (res, req) => {
    return res.status(200).json({
        mensaje: 'Hola mundo'
    });

}

module.exports = {
    prueba
}