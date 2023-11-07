const express = require('express')
const router = express.Router()

router.get('/auth/login', (req, res) => res.send("Página de Iniciar sesion"));
router.post('/auth/login', (req, res) => res.send("Logueando"));
router.get('/auth/register', (req, res) => res.send("Página de Registrarse"));
router.post('/auth/register', (req, res) => res.send("Registrando"));
router.get('/auth/logout', (req, res) => res.send("Logout"));

module.exports = router