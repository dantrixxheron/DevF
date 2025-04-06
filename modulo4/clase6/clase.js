/* ------------------------------ Recursividad ------------------------------ */
//una función recursiva es una función que se llama a sí misma para resolver un problema
//en este caso, la función suma los números desde 1 hasta n
function factorial(n){
    if(n < 1){
        return 1;
    }
    return n * factorial(n - 1);
}

let totalFactorial = factorial(125);
console.log(totalFactorial);


/* ------------------------------ Backtracking ------------------------------ */
// Backtracking es una técnica de programación que se utiliza para resolver problemas de búsqueda y optimización. 
// Se basa en la idea de construir soluciones incrementales y deshacer pasos si se determina que no conducen a una solución válida.
// En este caso, se utiliza para generar todas las permutaciones de una cadena de caracteres.
function permute(str, path = "", result = []){
    if(str.length === 0){
        result.push(path);
    } else {
        for (let i = 0; i < str.length; i++) {
            const remaining = str.slice(0, i) + str.slice(i + 1);
            permute(remaining, path + str[i], result);
        }
    }
    return result;
}

let result = permute("ab");
console.log(result);