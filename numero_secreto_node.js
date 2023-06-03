const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//
function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
}

let numeroSecreto = generarNumeroSecreto();
let intentos = 0;
let ultimoIntento = null;
let contadorRepetido = 0;

function obtenerConjeturaDelJugador() {
    return new Promise((resolve) => {
        //(resolve, reject)=(se cumplio exit, fue rechazada)
        rl.question('Ingresa tu conjetura: ', (conjetura) => {
            resolve(parseInt(conjetura));
            //^^^proceso async^^^
        });
    });
}

//async await: retorna promesas evitando las cadenas enlazadas de funciones con met .this
async function jugar() {
    while (true) {
        let conjetura = await obtenerConjeturaDelJugador();
        //con away se lee el cod como si fuera asyncrono, en orden.
        //se ejecuta en orden, linea por linea.

        if (conjetura === numeroSecreto) {
            intentos++;
            console.log(`¡Felicidades! Adivinaste el número secreto en ${intentos} intentos.`);
            break; // Salir del bucle
        }
        //
        if (conjetura === ultimoIntento) {
            if (contadorRepetido === 0) {
                intentos++;
                contadorRepetido++;
            } else {
                console.log("Ya has intentado con ese número repetidamente. Fin del juego.");
                break; // Salir del bucle
            }
            console.log("Ya has intentado con ese número, intenta con uno diferente.");
            //primer intento repetido, se suma el contadorRepetido y ya deja de ser "0" ,por lo tanto pasa al primer else y sale del juego.
        } else {
            intentos++;
            contadorRepetido = 0;
        }
        //
        ultimoIntento = conjetura;
    }

    console.log(`Número de intentos realizados: ${intentos}`);
    rl.close();
}

jugar();
