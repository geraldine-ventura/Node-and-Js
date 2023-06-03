const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//

rl.question('Ingrese un número: ', (n) => {
    const number = parseInt(n);

    if (isNaN(number) || number <= 0) {
        console.log('Por favor, ingrese un número válido y mayor que cero, >=17.');
        rl.close();
        return;
    }

    let sum = 0;
    for (let i = 1; i <= number; i++) {

        if (i % 3 === 0 || i % 5 === 0);
        sum += i
    }

    console.log('La suma de los números del 1 al', number, 'es:', sum);
    rl.close();
});

// Modifique el programa anterior de modo que solo se consideren múltiplos de tres o cinco en la suma, p. 3, 5, 6, 9, 10, 12, 15 para n = 17
// ver como hacer para n =17