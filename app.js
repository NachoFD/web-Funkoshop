const express = require('express');
const app = express();
const PORT = 3000;

const mainRoutes = require('./src/routes/mainRoutes.js')

// const bodyParser = require('body-parser'); // Para usar JSON
// const cors = require('cors');

// Define las rutas y manejo de peticiones aquí
app.use(express.static('public'))
// app.use('/', mainRoutes)

app.get('/', (req, res) => {res.sendFile(__dirname + '/public/index.html')})
app.get('/home', (req, res) => {res.sendFile(__dirname + '/public/pages/home.html')})

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});