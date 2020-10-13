const bodyParser = require('body-parser');
const express = require('express');
//Importa la libreria de express
const app = express();
//Obtener instancia, llama al constructor de express, acceso a express
const { pokemon } = require('./pokedex.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: true}));
/*
Verbos HTTP:
recurso: Registro en alguna base de datos
GET: Obtener un recurso
POST: Almacenar, crear recursos
PUT: Modificar todos los recursos
PATCH: Actualización de un dato de un recurso
DELETE: Eliminar un recurso
*/

app.get("/", (req,res,next) =>{
    res.send("Bienvenido al Pokedex");
})

//Primer parametro, URL que va a recibir 
//Segundo parametro, funcion a ejectuar
/* 
req: Peticion del cliente (request)
res: La respuesta que vamos a dar (response)
next: ...
 */


app.post("/pokemon", (req,res,next) => {
    return res.status(200).send(req.body);
})

app.get("/pokemon",(req,res,next) => {
//    console.log(req.params.name);
    res.status(200).send(pokemon);
});
//res.status(200).send(cosa)

app.get('/pokemon/:id([0-9]{1,3})', (req,res,next) => {
    const id = req.params.id-1;
    (id >= 0 && id <= 150) ? 
        res.status(200).send(pokemon[req.params.id - 1]) :
        res.status(404).send("Pokémon no encontrado.");
    
});

app.get('/pokemon/:name([A-Za-z]+)', (req, res, next) => {
    const name = req.params.name;

    const pk = pokemon.filter((p)=>{
            return (p.name.toUpperCase() == name.toUpperCase()) && p;
        });

        console.log(pk);

        (pk.length>0) ? 
        res.status(200).send(pk) : 
        res.status(404).send("Pokémon no encontrado.");
    
});


app.listen(process.env.PORT || 3000, () => {
console.log("Server is running...");
});
//Primer parametro, puerto del servidor
//Segundo parametro, funcion a ejectuar
 
/* app.listen(3000, function(){
    
})

Se puede abrir con:
localhost:3000
127.0.0.1:3000
IP:3000

*/