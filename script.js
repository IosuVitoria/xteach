//Este es el primer formato que ha tenido el algoritmo. Antes de la resolución con frontend incluido.

const permutaciones = (word) => {
    // Si la palabra ingresada tiene un sólo caracter de largo se devuelve la palabra directamente. 
    if (word.length <= 1) {
        return [word];
    }
    
    //Superado eso se genera un array en el que se guardarán las combinaciones de letras de las palabras que sean de dos o más caracteres.
    const resultado = [];

    // Empezamos a iterar. Cogemos la primera letra que será la que esté en la posición 0 del string. En el caso de Mouredev la S.
    for (let i = 0; i < word.length; i++) {
        const letraActual = word[i];
        //Usando slice obtenemos el resto de caracteres sobrantes. El "+" concatena las dos cadenas generadas. 
        const restoPalabra = word.slice(0, i) + word.slice(i + 1);

        // Enviamos el resto de la palabra a realizar las permutaciones.
        const permutacionesRestantes = permutaciones(restoPalabra);

        // Combinamos la letra actual con las permutaciones acumuladas con el resto de la palabra.
        for (const permutacion of permutacionesRestantes) {
            console.log(permutacion);
            resultado.push(letraActual + permutacion);
        }
    }

    return resultado;
}

const palabra = 'sol'; //Palabra de ejemplo dada por Mouredev.
const palabra2 = 'tarde'; //Otra palabra.
const permutacionesResultantes = permutaciones(palabra);
const permutacionesResultantes2 = permutaciones(palabra2);

console.log(permutacionesResultantes);
console.log(permutacionesResultantes2);