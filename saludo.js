/* function saludar() {

    let nombre = prompt("¿Cual es su nombre..?");
    console.log(`¡Buen dia sr/a: ${nombre}!`);
}
saludar();  */

const readline = require('readline');// require es una func para cargar mod en una aplicac

const rl = readline.createInterface({ // rl es una variavle que representa la interfas de lectura
    input: process.stdin,
    output: process.stdout
});

function saludar() {

    rl.question("Por favor, ingresa tu nombre: ", function (nombre) {

        const nombreMinuscula = nombre.toLowerCase();

        if (nombreMinuscula === "alice" || nombreMinuscula === "bob") {
            console.log(`Hola ${nombre}, Bienvenido!`)//llama al parametro de la funcion
        } else {
            console.log(`¡Lo siento, solo Alice y Bob son bienvenidos!`)
        }
        rl.close();
    });
};

saludar();
