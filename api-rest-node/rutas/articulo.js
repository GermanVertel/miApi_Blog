const express = require('express');
const router = express.Router();

router.get('/ruta-de-prueba', (req, res) => {
  res.send('Ruta de prueba');
});

module.exports = router;

