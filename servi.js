const express = require('express');
const app = express();

const port = process.env.PORT || 3000; 

app.set('view engine', 'ejs');

app.set('views',__dirname +'/views');

/*Configurando nuestro primer middleware*/
app.use(express.static(__dirname + "/public"));

//Rutas de web
app.use('/',  require('./router/RutasWeb'))

app.use((req, res) => {
    res.status(404).render("404", {title
        :"404",
        description: "Consulta inesperada" 
    });
});



app.listen(port, () => {
    console.log("Servidor  a su disposisión", port)
});