const express = require('express');
//Importa la libreria de express
const app = express();
//Obtener instancia, llama al constructor de express, acceso a express

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
    res.status(200);
    res.send("Hola Mundo");
    res.send("Bienvenido.");
})

//Primer parametro, URL que va a recibir 
//Segundo parametro, funcion a ejectuar
/* 
req: Peticion del cliente (request)
res: La respuesta que vamos a dar (response)
next: ...
 */

app.listen(3000, () => {
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