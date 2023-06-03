/* al presionar el botón pedir un número.
Informar si el numero es PRIMO o no. */

const readline = require('readline');
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});


function obtenerDivisores(numero) {
    const divisores = [];

    for (let i = 2; i < numero; i++) {//restrinjo : todos los num primos son divisibles por 1 y por si mismo,

        if (numero % i === 0) {// evaluo: es decir q si tiene algun divisor es primo
            divisores.push(i);
        }
    }

    return divisores;

}

function mostrarPrimos(numero) {

    const divisores = obtenerDivisores(numero);
    if (divisores != 0 || numero <= 1) {// comparo si es , o no.
        console.log("El numero: " + numero + " ,no es primo.");
    }
    else {
        console.log("El numero; " + numero + " ,es primo.");
    }
}





rl.question('Ingrese un número para evaluar si es primo: ', (numero) => {
    mostrarPrimos(Number(numero));

    const numero = parseInt(input);

    if (isNaN(numero)) {
        console.log("El valor ingresado no es un número válido.");
        rl.close();
        return;

        const resultado = mostrarPrimos(numero);
        console.log(numero);

        rl.close();
    });


/* while (isNaN(numero)) {//validacion
        numero = parseInt(promp("Eso no es un num, ingrse un num: "));
    } */