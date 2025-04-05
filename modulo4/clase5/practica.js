function findLongestWord(text) {
    // Dividir el texto en palabras y almacenarlas en una variable
    const words = text.split(" ");    
    let longestWord = ''; // Inicializar la palabra más larga
    for (let i = 0; i < words.length; i++) {
        if(words[i].length>longestWord.length){
            longestWord=words[i];
        }
    }
    return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"