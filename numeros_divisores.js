const readline = require('readline');
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

//////////
let contadorDivisor = 0;

rl.question("ingrese un numero para extraer divisores:  ", (numero) => {

    for (let i = 1; i <= numero; i++) {

        if (numero % i == 0) {
            console.log('El numero', i, ' es divisor.');
            contadorDivisor++;
        }

    }

    console.log('la cantidad de divisores es: ', contadorDivisor);

    rl.close();
});
//////////////////////


function obtenerDivisores(numero) {
    const divisores = [];

    for (let i = 1; i <= numero; i++) {

        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    return divisores;
}

function mostrarDivisoresYCantidad(numero) {
    const divisores = obtenerDivisores(numero);
    const cantidadDivisores = divisores.length;

    console.log(`Los divisores de ${numero} son: ${divisores.join(', ')}`);
    console.log(`Cantidad de divisores encontrados: ${cantidadDivisores}`);
}

rl.question('Ingrese un número: ', (numero) => {
    mostrarDivisoresYCantidad(Number(numero));
    rl.close();
});

