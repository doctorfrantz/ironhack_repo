// console.table([
//     "Slipknot",
//     "ClownCore",
//     "Kishi Bashi",
//     "Children of Bodom",
//     "Nobuo Uematsu"
// ])

/* 
1.crear un objecto con los keys
{first string
lastname string
cities i've lived in array of strings
age number
dob string
drinkalcohol boolean
}

imprimir si bebemos o no bebemos alcohol
User drinks alcohol: + 
*/
let objectToConsole = {
    firstName: "Alexis",
    lastName: "Frantz",
    citiesIveLivedIn: ["Barcelona", "Calafell", "Calella", "Blanes"],
    age: 34,
    dob: "24 february 1988",
    drinkAlcohol: true,
}
console.log("User drinks alcohol: " + `${objectToConsole.drinkAlcohol}`);
/*
2.crear array de objectos con 3 objetos
    libros prefridos con
    bookName - string
    genre - array
    author - string
    year - number
    isbn - number
 
 imprimir "My favourite book is: y entre comillas el nombre del libro"
 
 */
let objectsArray = [
    {
        bookName: "1984",
        genre: ["dystopian"],
        author: "George Orwell",
        year: 1948,
        isbn: 9783103900095,
    },
    {
        bookName: "El extranjero",
        genre: ["absurdism"],
        author: "Albert Camus",
        year: 1942,
        isbn: 9780812416695,
    },
    {
        bookName: "Kafka en la orilla",
        genre: ["absurdism"],
        author: "Haruki Murakami",
        year: 2002,
        isbn: 9780307275264,
    },
]

console.log(`My favorite book is ${objectsArray[1].bookName}`)