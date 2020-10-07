// PRÁCTICA PARA LUNES
/*
mandar repositorio con:
- Responder diferente con cada ruta:
    /hola -> la respuesta debe ser 'hola koder, bienvenido'
    /adios -> la respuesta debe ser 'hasta la vista babe'
 */

 /* const http = require('http')

const server = http.createServer((request, response) => {
    console.log('Petición entrante ->' + request.url)
    if(request.url === '/hola'){
        response.write('Hola koder, bienvenido')
    } else if (request.url === '/adios') {
        response.write('Hasta la vista babe')
    }
    response.end()

})

server.listen(8080, () => {
    console.log('El servidor está escuchando en el puerto 8080')
})
*/

/*
const http = require('http')

const server = http.createServer((request, response) => {
    console.log('Petición entrante ->' + request.url)
    console.log('Method:', request.method)
    if(request.url === '/hola'){
        response.write('Hola koder, bienvenido')
    } else if (request.url === '/adios') {
        response.write('Hasta la vista babe')
    }
    response.end()

})

server.listen(8080, () => {
    console.log('El servidor está escuchando en el puerto 8080')
})
*/

/* TAREA 2:
Hacer que las rutas reaccionen a métodos GET y POST
POST /hola -> hola koders, estás intentando crear
GET /hola -> hola koder, estás intentando obtener
POST /adios -> hasta la vista baby con un post
GET /adios -> hasta la vista baby con un get


TAREA 3:
    - Investigar como cambiar el header Content-Type de la respuesta
    - Cambiar el header content type de la respuesta por el MIMEType de html
*/

const http = require('http')

const server = http.createServer((request, response) => {
    console.log('Petición entrante ->' + request.url)
    console.log('Method:', request.method)
    if(request.url === '/hola' && request.method === 'POST'){
        response.write('hola koders, estás intentando crear')
    } else if(request.url === '/hola' && request.method === 'GET'){
        response.write('hola koder, estás intentando obtener')
    } else if(request.url === '/adios' && request.method === 'POST'){
        response.write('hasta la vista baby con un post')
    } else if (request.url === '/adios' && request.method === 'GET'){
        response.write('hasta la vista baby con un get')
    }
    response.end()

})

server.listen(8080, () => {
    console.log('El servidor está escuchando en el puerto 8080')
})