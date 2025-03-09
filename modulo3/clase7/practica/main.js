//traer todos los elementos a utilizar
const campoPaswd = document.getElementById("paswd");
const longitudSelector = document.getElementById("length");
const valorLongitudPaswd = document.getElementById("longPaswd");
const mayusCheckbox = document.getElementById("mayus");
const minusCheckbox = document.getElementById("minus");
const numsCheckbox = document.getElementById("nums");
const simbolsCheckbox = document.getElementById("simbols");
const btnGenerar = document.getElementById("btnGenerate");
const btnCopiar = document.getElementById("copy");

// Caracteres posibles para la contraseña
const mayusCaract = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const minusCaract = "abcdefghijklmnñopqrstuvwxyz";
const numsCaract = "0123456789";
const simbolsCaract = "[]{}}!@#$%^&*()_-+=<>?/,.°|";

// Función para generar una contraseña segura
function generatePassword() {
    let length = longitudSelector.value;
    let characters = "";

    if (mayusCheckbox.checked) characters += mayusCaract;
    if (minusCheckbox.checked) characters += minusCaract;
    if (numsCheckbox.checked) characters += numsCaract;
    if (simbolsCheckbox.checked) characters += simbolsCaract;

    if (characters === "") {
        campoPaswd.value = "Selecciona al menos una opción";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    campoPaswd.value = password;
}

// Copiar contraseña al portapapeles
btnCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(campoPaswd.value);
    alert("Contraseña copiada al portapapeles");
});

// Actualizar el valor de la longitud
longitudSelector.addEventListener("input", () => {
    valorLongitudPaswd.textContent = longitudSelector.value;
});

// Generar una contraseña cuando se presiona el botón
btnGenerar.addEventListener("click", generatePassword);
