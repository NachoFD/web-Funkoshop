const express = require('express')
const router = express.Router()

router.get('/admin', (req, res) => res.send("Página de Admin"));
router.get('/admin/create', (req, res) => res.send("Admin Creando"));
router.post('/admin/create', (req, res) => res.send("Admin Creando"));
router.get('/admin/edit/:id', (req, res) => res.send("Admin Editando "));
router.put('/admin/edit/:id', (req, res) => res.send("Admin Editando"));
router.delete('/admin/delete/:id', (req, res) => res.send("Admin Eliminando"));

module.exports = router