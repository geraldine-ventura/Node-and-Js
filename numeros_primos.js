//Escriba un programa que imprima todos los números primos.

function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        //Luego, iniciamos un bucle for que comienza desde 2 y continúa hasta la raíz cuadrada (2,3,4...raiz cuadrada) del número (obtenida usando Math.sqrt(numero)).
        if (numero % i === 0) {
            return false;
        }
        //Dentro del bucle, verificamos si el número es divisible por el valor actual de i. 
        //en este caso i arranca en 2, es decir es >=2 y va hasta la raiz cuadrada del numero.( serian los posibles divisores del numero)
        //si() numero % i === 0), es decir: es divisible sin dejar residuo , entonces el número no es primo y retornamos false.
    }

    return true;
}

function imprimirNumerosPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (esPrimo(numero)) {
            console.log(numero);
        }
    }
}

const limiteNumeros = 100; // Puedes ajustar el límite según tus necesidades
console.log(`Los números primos hasta ${limiteNumeros} son:`);
imprimirNumerosPrimos(limiteNumeros);
