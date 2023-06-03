//6. Escriba un programa que le pida al usuario un número n y le dé la posibilidad de elegir entre calcular la suma o calcular el producto de 1,…, n.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un número: ', (n) => {
    const number = parseInt(n);

    if (isNaN(number) || number <= 0) {
        console.log('Por favor, ingrese un número válido y mayor que cero.');
        rl.close();
        return;
    }

    rl.question('Ingrese "s" para calcular la suma o "p" para calcular el producto: ', (choice) => {
        if (choice.toLowerCase() === 's') {
            let sum = 0;
            for (let i = 1; i <= number; i++) {
                sum += i;
            }
            console.log('La SUMA de los números del 1 al', number, 'es:', sum);
        } else if (choice.toLowerCase() === 'p') {
            let product = 1;
            for (let i = 1; i <= number; i++) {
                product *= i;
            }
            console.log('El PRODUCTO de los números del 1 al', number, 'es:', product);
        } else {
            console.log('Opción inválida. Por favor, ingrese "s" para calcular la suma o "p" para calcular el producto.');
        }

        rl.close();
    });
});
