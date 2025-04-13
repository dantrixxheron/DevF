/* ---------------------------- Búsqueda binaria ---------------------------- */

// La búsqueda binaria es un algoritmo eficiente para encontrar un elemento en una lista ordenada.
// Funciona dividiendo repetidamente la lista por la mitad y comparando el elemento buscado con el elemento del medio.
function binarySearch(array, target, low, high){
    // Caso base: si el rango es inválido, el elemento no está presente en el arreglo.
    if(low > high){
        return -1;
    }

    // Calcular el punto medio del rango actual.
    let mid = Math.floor((low + high) / 2);
    
    // Comparar el elemento del medio con el objetivo.
    // Si el elemento del medio es igual al objetivo, se ha encontrado el elemento.
    if(array[mid] === target){
        return mid;
    // Si el elemento del medio es mayor que el objetivo, buscar en la mitad izquierda.
    // Si el elemento del medio es menor que el objetivo, buscar en la mitad derecha.
    } else if (array[mid] > target){
        return binarySearch(array, target, low, mid - 1);
    } else {
        return binarySearch(array, target, mid + 1, high);
    }
}

// Ejemplo de uso de la búsqueda binaria
// Generar un arreglo de 200 números aleatorios entre 0 y 999 y ordenarlo.
let arreglo = Array.from({ length: 200 }, () => Math.floor(Math.random() * 1000));
// Ordenar el arreglo para que la búsqueda binaria funcione correctamente.
arreglo.sort((a, b) => a - b);

// Mostrar el arreglo ordenado en la consola.
console.log(arreglo);

// Buscar el número 422 en el arreglo ordenado utilizando búsqueda binaria.
let foundTarget = binarySearch(arreglo, 422, 0, arreglo.length - 1);

// Si el número fue encontrado, mostrar su índice; de lo contrario, mostrar un mensaje indicando que no fue encontrado.
console.log(foundTarget);


/* ---------------------------- MinMax ---------------------------- */
// La función MinMax encuentra el valor mínimo y máximo en un arreglo utilizando recursión.
// La función toma un arreglo y dos índices que representan el rango del arreglo a considerar.
function MinMax(array, startIndex, lastIndex){
    // Caso base: si el rango es inválido, devolver el mismo elemento como mínimo y máximo.
    if(startIndex === lastIndex){
        return [array[startIndex], array[startIndex]];
    }

    // Caso base: si el rango tiene solo dos elementos, devolver el mínimo y máximo entre ellos.
    // Se compara el elemento en startIndex con el elemento en lastIndex.
    if((lastIndex - startIndex) === 1){
        if(array[startIndex] > array[lastIndex]){
            return [array[lastIndex], array[startIndex]];
        } else {
            return [array[startIndex], array[lastIndex]];
        }
    }

    // Dividir el arreglo en dos mitades y llamar recursivamente a la función para cada mitad.
    // Se calcula el punto medio y se obtienen los valores mínimo y máximo de ambas mitades.
    else {
        let mid = Math.floor((startIndex + lastIndex) / 2);
        let [leftMin, leftMax] = MinMax(array, startIndex, mid);
        let [rightMin, rightMax] = MinMax(array, mid + 1, lastIndex);

        return [Math.min(leftMin, rightMin), Math.max(leftMax, rightMax)];
    }
}

// Ejemplo de uso de la función MinMax
arreglo = Array.from({ length: 200 }, () => Math.floor(Math.random() * 1000));
console.log(arreglo);


let minAndMax = MinMax(arreglo, 0, arreglo.length - 1);

console.log(minAndMax);
