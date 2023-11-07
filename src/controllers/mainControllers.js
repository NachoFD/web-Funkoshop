const mainControllers = {
    home: (req, res) => res.send("Página de Home"),
    contact: (req, res) => res.send("Página de Contacto"),
    about: (req, res) => res.send("Página de Nosotros"),
    faqs: (req, res) => res.send("Página de Faqs")
}

module.exports = mainControllers