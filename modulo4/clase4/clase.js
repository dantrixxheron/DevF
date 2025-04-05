//solo funciona cuando el array esta ordenado
function TwoSum(array, target){
    let left = 0;
    let right = array.length - 1;

    //primero verifica que el primer valor sea menor que el ultimo
    while(left < right){
        //si lo es, entonces suma los dos valores
        let result = array[left] + array[right];
        //si la suma es igual al target, entonces devuelve el par
        if(result === target){
            return [array[left], array[right]];
            //si la suma es menor que el target, entonces avanza el puntero izquierdo
        } else if(result < target){
            left++;
        } else {
            //si la suma es mayor que el target, entonces retrocede el puntero derecho (el del final)
            right--;
        }
    }
    return null;
}

let arr = [2, 7, 11, 15];
let newArr = [10, 15, 7, 11, 8, 2, 44, 6];

let target = 9;
let result = TwoSum(arr, target);
console.log(result); // Resultado: [2, 7]
result = TwoSum(newArr, target);
console.log(result);

//otra forma de usar dos punteros pero primero recorre todos los elementos y los compara con el primero y despues avanza el puntero izquierdo
//en este caso no es necesario que el array este ordenado
function improvedTwoSum(nums, target){
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target){
                return [nums[i], nums[j]]
            }
        }
    }
    // Si no se encuentra ningún par que sume el target, devuelve null
    return null;
}


let improvedResult = improvedTwoSum(newArr, target);
console.log(improvedResult);

let beast = '';