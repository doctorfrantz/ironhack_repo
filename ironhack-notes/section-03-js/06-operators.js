// 1. ==
// 2. !==
// 3. (num < 18 || num > 18 || num >= 18)


// somos un cine que tenemos que ofrecer a los niños menores de 15 años un 20 %
// si son menor o igual a 5, es gratis
// entre 15 y 18 pagan lo normal
// si son mayores de 60 pagan un 40% de descuento
let age = 4;
if (age >= 15 && age <= 60) {
    console.log("You pay the standard price")
} else if (age > 5 && age < 15) {
    console.log("You have a 20% discount")
} else if (age < 5) {
    console.log("You enter for free!")
} else {
    console.log("you have a 40% discount")
};



console.log("SWITCH - Multiple Cases");
// Ejemplo complejo - SWITCH - COUNTRY CONTINET FINDER - CASOS MULTIPLES
const countryOfOrigin = prompt("What country where you born?").toLowerCase();
switch (countryOfOrigin) {
  case "venezuela":
  case "colombia":
  case "ecuador":
  case "brazil":
    alert(`Cool, ${countryOfOrigin} is located in South America`);
    console.log(`Cool, ${countryOfOrigin} is located in South America`);
    break;
  case "spain":
  case "france":
  case "portugal":
  case "andorra":
    alert(`Cool, ${countryOfOrigin} is locaded in Europe`);
    console.log(`Cool, ${countryOfOrigin} is locaded in Europe`);
    break;
  default:
    alert("you are not from this planet! go Invade somewhere else...");
    console.log("you are not from this planet! go Invade somewhere else...");
}

// EJERCICIO #1
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
let livesIn = {
    livesInCity: false,
    livesInTown: true,
    
}
/*
user = (name, age, city) => {
    if (city.livesInCity === true) {
        return `${name} tiene ${age} y vive en la ciudad`
    } else {
        return `${name} tiene ${age} y vive en el campo`
    }
}
console.log(user("Jarko", 25, { livesInCity: true, livesInTown: false }));
*/
user = (name, age, city) => {
    switch (livesInCity) {
        case city.livesInCity === true:
            return `${name} tiene ${age} y vive en la ciudad`;
            break;
        case city.livesInCity === false:
            return `${name} tiene ${age} y vive en el campo`;
            break;
    }
}
console.log(user("Jarko", 25, { livesInCity: true, livesInTown: false }));
// Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.

//console.log(miFuncion("Jarko", 25, {livesInCity: true, livesInTown: false}));
//console.log(miFuncion("Martina", 42, {livesInCity: false, livesInTown: true}));
//console.log(miFuncion("Laia", 78, { livesInCity: false, livesInTown: true }));

// dale un array y devuelve el tipo de dato que hay en cada una de sus posiciones
// EJERCICIO - 001
// Dado un array, devuelve el tipo de dato que hay en cada una de sus posiciones.
let arr = ["Goku", 20, false, "Harry Potter", { name: "Wes Anderson", age: 52}];
function arrayType(arr) {
    for (let i = 0; i < arr.length; i++){
        console.log(typeof arr[i]);
    }
}

// EJERCICIO - 002
// Creamos un array de strings con nombres de personajes famosos. Lo vamos a recorrer todo e imprimiremos la misma frase para cada uno (algo como "X is so famous, I love them.").

let arr2 = ["Goku", "Trump", "Hitler", "Harry Potter", "Wes Anderson"];
function isFamousQuote(arr2) {
    for (let i = 0; i < arr2.length; i++){
        console.log(`${arr[i]} is so famous, I love him`)
    }
}