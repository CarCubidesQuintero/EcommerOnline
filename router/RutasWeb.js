const express = require('express');
const router = express.Router();

router.get("/",(req, res) => {
    res.render("produc", {title
        : ""});
});

router.get("/pasarela",(req, res) => {
    res.render("pasarela", {title
        :"Esta sera mi pagina de pasarela"});
});

module.exports = router;
