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