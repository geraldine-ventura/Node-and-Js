
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un número: ', (n) => {//INICIO FUNC FLECHA
    const numero = parseInt(n);//declaro variable

    if (isNaN(numero) || numero <= 0) {// solo validacion
        console.log('Por favor, ingrese un número válido y mayor que cero.');
        rl.close();
        return;
    }

    let contadorPares = 0;
    for (let i = 1; i <= numero; i++) {

        if (i % 2 == 0) {
            contadorPares++;
            console.log('numero par: ', i);
        }

    }
    rl.close();
    console.log('la cantidad de pares es:', contadorPares);//luego del for

});//FIN FUNC FLECHA



/* 
stdin (standard input): Es el flujo de entrada estándar donde se espera que el programa lea datos de entrada. 
En el caso de un programa de consola, stdin generalmente representa la entrada del teclado. 
Puedes usar métodos de lectura, como readline, para leer los datos ingresados por el usuario desde stdin.

stdout (standard output): Es el flujo de salida estándar donde se espera que el programa envíe los resultados o mensajes de salida. 
En un programa de consola, stdout generalmente representa la salida que se mostrará en la pantalla. 
Puedes usar métodos de escritura, como console.log, para enviar datos o mensajes a stdout, lo que se imprimirá en la consola.
 */

