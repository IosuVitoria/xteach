const permutaciones = (word) =>{
    if (word.length <= 1) {
        return [word];
    }

    const resultado = [];

    for (let i = 0; i < word.length; i++) {
        const letraActual = word[i];
        const restoPalabra = word.slice(0, i) + word.slice(i + 1);

        const permutacionesRestantes = permutaciones(restoPalabra);

        for (const permutacion of permutacionesRestantes) {
            resultado.push(letraActual + permutacion);
        }
    }

    return resultado;
}

//Agregado de manejado del DOM para poder hacer la representación con el FRONT.
const generarPermutaciones = () => {
    const inputWord = document.getElementById('inputWord');
    const permutationsResult = document.getElementById('permutationsResult');

    const palabra = inputWord.value;
    const permutacionesResultantes = permutaciones(palabra);

    permutationsResult.innerHTML = '';

    //Representación de la estructura para mostrar las permutaciones. Idea: tras mapeo comprobar si se puede introducir el enlace a la RAE por si alguna palabra resulta ser anagrama de otra y algún usuari@ quere consultar acepción.
    permutacionesResultantes.forEach((permutacion, index) => {
        const permutationItem = document.createElement('div');
        permutationItem.classList.add('permutation-item');
        permutationItem.innerHTML = `<a href="https://dle.rae.es/${permutacion}?m=form" class="permutation__word" ><span class="permutation-number">${index + 1}</span> ${permutacion}</a>`;
        permutationsResult.appendChild(permutationItem);
    });
}

const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generarPermutaciones);
