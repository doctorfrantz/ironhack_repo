/*

let arr = ["Goku", 20, false, "Harry Potter", { name: "Wes Anderson", age: 52 }];
function arrayType(arr) {
    for (let i = 0; i < arr.length; i++){
        console.log(typeof arr[i]);
    }
}

// EJERCICIO - 002
// Creamos un array de strings con nombres de personajes famosos. Lo vamos a recorrer todo e imprimiremos la misma frase para cada uno (algo como "X is so famous, I love them.").

let arr2 = ["Goku", "Trump", "Ghandi", "Harry Potter", "Alien"];
function isFamousQuote(arr2) {
    for (let i = 0; i < arr2.length; i++){
        console.log(`${arr2[i]} is so famous, I love him`)
    }
}

arrayType(arr);
isFamousQuote(arr2);
*/

// //Crea una función que añada el primer elemento al principio de un array y el segundo elemento al final del mismo array.
// ya estos metodosNativo de Array existen :)

let arr3 = ["Goku", "Trump", "Ghandi", "Harry Potter", "Alien"];
let arr4 = ["Popeye", "Naruto"];

function unshiftPush(newElements, target) {
    target.unshift(newElements[0]);
    target.push(newElements[1]);
    return target;
};

console.log(unshiftPush(arr4, arr3));