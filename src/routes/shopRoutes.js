const express = require('express')
const router = express.Router()

const shopControllers = require('../controllers/shopControllers')

router.get('/shop', (req, res) => res.send("Página de Shop"));
router.get('/shop/item/:id', (req, res) => res.send("Página de item"));
router.post('/shop/item/:id/add', (req, res) => res.send("Página de Agregar Item"));
router.get('/shop/cart', (req, res) => res.send("Página Sobre el carrito del shop"));
router.post('/shop/cart', (req, res) => res.send("Página Sobre el carrito del shop"));

module.exports = router