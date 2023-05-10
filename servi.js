const express = require('express');
const app = express();

const port = 3000;

app.get("/",(req, res) => {
    res.send("Pagina de mis productos");
});

app.get("/Pasarela",(req, res) => {
    res.send("Pasarela de pago");
});

app.listen(port, () => {
    console.log("Servidor  a su servicio en el puerto", port)
});