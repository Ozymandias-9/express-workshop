const express = require('express');
//Importa la libreria de express
const app = express();
//Obtener instancia, llama al constructor de express, acceso a express
const { pokemon } = require('./pokedex.json');
/*
Verbos HTTP:
recurso: Registro en alguna base de datos
GET: Obtener un recurso
POST: Guardar o publicar algo, postear algo
PATCH: Actualización de un dato de un recurso
PUT: Modificar todos los recursos
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

app.get("/pokemon/all",(req,res,next) => {
//    console.log(req.params.name);
    res.status(200);
    res.send(pokemon);
});

app.get('/pokemon/:id([0-9]{1,3})', (req,res,next) => {
    const id = req.params.id-1;
    if (id >= 0 && id <= 150){
    res.status(200);
    res.send(pokemon[req.params.id - 1]);
    }
    else {
        res.status(404);
        res.send("Pokémon no encontrado.")
    }
})

app.get('/pokemon/:name', (req, res, next) => {
    const name = req.params.name;
    for(i = 0;i < pokemon.length; i++) {
        if (pokemon[i].name == name){
            res.status(200);
            res.send(pokemon[i]);

        }
        res.status(404);
        res.send("Pokémon no encontrado.");
    }
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