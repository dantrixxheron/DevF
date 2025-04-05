const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarParejaImp(arr) {
    /**** IMPORTANT: este es el método guardando un puntero y compararlo con todos hasta encontrar los que concuerden
                Sugerido por el sensei para esta situación****/
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // Compara el primer caracter de cada nombre que sean iguales
            if(arr[i].split("")[0] === arr[j].split("")[0]){
                return `${arr[i]}, ${arr[j]}`;
            }
        }
    }
    // Si no se encuentra ningún par que sume el target, devuelve null
    return null;
}

console.log(encontrarParejaImp(invitados)); //Carlos, Cecilia

function encontrarPareja(arr) {
    let izq = 0;
    let der = arr.length - 1;
    let ready = true;

    let capital = (arr, index) => {
        return arr[index].split("")[0];
    }

    while (ready) {
        //verifica que no quiera devolver la misma persona como resultado
        // avanza del lado izquierdo y develve el derecho a su estado inicial
        if (der == izq) {
            izq++;
            der = arr.length - 1;
            // verifica que no se sobresale del arreglo
            if (izq >= arr.length) {
                ready = false;
                return "No encontrado";
            }
        } else {
            //entra aquí una vez que ve que se están comparando dos valores diferentes
            // obtiene la primera letra y verifica si es que son igual su primera letra
            if (capital(arr, izq) != capital(arr, der)) {
                //al no ser igual, se recorre uno en derecha
                der--;
            } else {
                //al ser igual, ya los devuelve como pareja
                ready = false;
                return `${arr[izq]}, ${arr[der]}`;
            }
        }
    }
}

let parejasNew=["Anuar", "Bruno", "Carla", "Diana"]
let newpareja=encontrarPareja(parejasNew);
console.log(newpareja); //No encontrado

let parejas2=["Anuar", "Diana", "Jessica", "Javier", "Sofía"];
console.log(encontrarPareja(parejas2)) //Jessica, Javier