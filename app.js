const express = require('express');
const app = express();
const PORT = 3000;

const mainRoutes = require('./src/routes/mainRoutes.js')

const bodyParser = require('body-parser'); // Para usar JSON
const cors = require('cors');

// Define las rutas y manejo de peticiones aquí
app.use(express.static('public'))
app.use('/', mainRoutes)

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});