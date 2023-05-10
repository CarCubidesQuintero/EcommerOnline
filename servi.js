const express = require('express');
const app = express();

const port = 3000;

app.set('view engine', 'ejs')

app.set('views',__dirname +'/views');

/*Configurando nuestro primer middleware*/
app.use(express.static(__dirname + "/public"));

app.get("/",(req, res) => {
    res.render("produc", {title
        : "Mi pagina de productos"});
});

app.get("/pasarela",(req, res) => {
    res.render("pasarela", {title
        :"Esta sera mi pagina de pasarela"});
});


app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/public/404.html");
});



app.listen(port, () => {
    console.log("Servidor  a su servicio en el puerto", port)
});