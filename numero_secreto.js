/* Escriba un juego de adivinanzas en el que el usuario tenga que adivinar un número secreto.
Después de cada conjetura, el programa le dice al usuario si su número era demasiado grande o
 demasiado pequeño.Al final se debe imprimir el número de intentos necesarios.
Solo cuenta como un intento si ingresan el mismo número varias veces consecutivas. */


function juegoAdivinanzas() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    //se utiliza para generar un número aleatorio entre 1 y 100.

    let intentos = 0;
    let adivinado = false;//La variable adivinar se inicializa en false para indicar que el usuario aún no ha adivinado el número secreto.

    /* Dentro del ciclo while, se le pide al usuario que ingrese un número y se compara con el número secreto.
     Si la conjetura del usuario es correcta, se actualiza adivinar a true, 
    indicando que el usuario ha adivinado el número secreto y el ciclo debe detenerse. */

    let ultimoIntento = null;
    let conjetura;
    //En la función verificarConjetura, se compara la conjetura actual(pasada como parámetro)
    // con el valor de ultimoIntento.Si son iguales, significa que el jugador ha ingresado la misma conjetura consecutivamente.

    while (!adivinado) {
        /* Entonces, while (!salir) se lee como "mientras salir no sea true" o "mientras salir sea false".
         De esta forma, el ciclo seguirá ejecutándose hasta que salir sea actualizado a true */

        conjetura = parseInt(prompt("Adivina el numero secreto (entre 1 y 100):"));

        if (conjetura == ultimoIntento) {

            console.log("YA SE INTENTASTE ese número,ahora `solo cuentas con  un intento`. Intenta con uno diferente o.");
            //cond para ver si se ingresa 2veces
            adivinado = true;
            intentos++;

        } else if (conjetura == numeroSecreto) {

            console.log(`¡Felicitaciones! ADIVINASTE EL NUMERO secreto en ${intentos} intentos.`);
            adivinado = true;
            intentos++;

        } else if (conjetura > numeroSecreto) {

            console.log("DEMACIADO GRANDE. Intenta con un número más pequeño.");
            intentos++;
        } else {

            console.log("DEMACIADO PEQUENO. Intenta con un número más grande.");
            intentos++;
        }

        ultimoIntento = conjetura;
    }
    console.log(`Número de intentos que realizo: ${intentos} intentos`);
}
juegoAdivinanzas();
 // ver como hacer si : Solo cuenta como un intento, si ingresan el mismo número varias veces consecutivas.
