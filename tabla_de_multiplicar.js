//7. Escriba un programa que imprima una tabla de multiplicar para números hasta el 12.


for (let i = 1; i <= 12; i++) {
    //Se inicia un bucle for que va desde 1 hasta 12. La variable i se utiliza como contador para representar el número para el cual queremos generar la tabla de multiplicar.
    let row = '';
    //Se declara una variable row como una cadena vacía que se utilizará para almacenar los elementos de cada fila de la tabla de multiplicar.
    for (let j = 1; j <= 12; j++) {
        //Se inicia otro bucle for anidado dentro del bucle externo. Este bucle itera desde 1 hasta 12, representando el multiplicador para cada número de la tabla.
        row += (i * j) + '\t';
        //Dentro del bucle anidado, se calcula el producto de i y j y se concatena con la variable row, junto con una tabulación (\t) para separar los números en la fila de la tabla.
    }
    console.log(row);
}
