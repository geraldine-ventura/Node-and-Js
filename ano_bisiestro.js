// Escriba un programa que imprima los próximos 20 años bisiestos.

function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}

function imprimirProximosBisiestos(cantidad) {
    const anioActual = new Date().getFullYear();
    let anio = anioActual;

    while (cantidad > 0) {
        if (esBisiesto(anio)) {
            console.log(anio);
            cantidad--;
        }
        anio++;
    }
}

const cantidadBisiestos = 20;
console.log(`Los próximos ${cantidadBisiestos} años bisiestos son:`);
imprimirProximosBisiestos(cantidadBisiestos);

//ver bien!

////////////////////////
/* function mostar() {

    var anoActual = new Date().getFullYear(); // Obtener el año actual
    var contadorBisiestos = 0;


    while (contadorBisiestos < 20) {
        if (anoActual % 4 === 0 && (anoActual % 100 !== 0 || anoActual % 400 === 0)) {// cond:Si el año es divisible por 4 y no es divisible por 100, o es divisible por 400, es bisiesto
            contadorBisiestos++;
        }
        anoActual++;
    }
    console.log(anoActual);
    } */

    ////////////////
/* var añoActual = new Date().getFullYear(); // Obtener el año actual
var contadorBisiestos = 0;
var añosBisiestos = [];//array para almacenar los años bisiestos
 
while (contadorBisiestos < 20) {
    if (añoActual % 4 === 0 && (añoActual % 100 !== 0 || añoActual % 400 === 0)) {
        // Si el año es divisible por 4 y no es divisible por 100, o es divisible por 400, es bisiesto
        añosBisiestos.push(añoActual);//corresp al array creado.
        contadorBisiestos++;
    }
    añoActual++;
}
 
console.log(añosBisiestos); */

