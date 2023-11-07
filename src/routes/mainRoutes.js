const express = require('express')
const router = express.Router()

router.get('/home', (req, res) => res.send("Página de Home"));
router.get('/contact', (req, res) => res.send("Página de Contacto"));
router.get('/about', (req, res) => res.send("Página Sobre Nosotros"));
router.get('/faqs', (req, res) => res.send("Página Sobre Faqs"));

module.exports = router