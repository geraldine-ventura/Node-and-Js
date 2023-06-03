/* const http = require('http');
const servidor = http.createServer((req, res) => {

    console.log('Solic nueva');//solo para que aparesc en consola cuando lo llamo

    res.end('Hola, mundo!');
});

const puerto = 3000;
servidor.listen(puerto, () => {
    // van dos argumentos: el puerto y la funcion flecha

    console.log(`El serv esta escuchando en el puerto ${puerto}...`)
}); */


const http = require('http');
const servidor = http.createServer((req, res) => {
    console.log('===> req (solucitud)');
    //console.log(req);
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.end("el proceso si se culmina .)");
});

const puerto = 3000;

servidor.listen(puerto, () => {
    // van dos argumentos: el puerto y la funcion flecha
    console.log(`El serv esta escuchando en el puerto ${puerto}...`);
});