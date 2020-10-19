const morgan = require ('morgan');
const express = require('express');
//Importa la libreria de express
const app = express();
//Obtener instancia, llama al constructor de express, acceso a express
const pokemon = require('./routes/pokemon');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({  extended: true }));
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
    res.send(200).json({ code: 1, message: "Bienvenido al Pokédex"});
})

//Primer parametro, URL que va a recibir 
//Segundo parametro, funcion a ejectuar
/* 
req: Peticion del cliente (request)
res: La respuesta que vamos a dar (response)
next: ...
 */ 

app.use("/pokemon",pokemon);

app.use((req,res,next) => {
    return res.status(404).json({ code: 404, message: "URL not found"});
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