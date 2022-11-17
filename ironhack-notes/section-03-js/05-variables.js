// strings numeros y un boolean
 let userInformation = {
   firstName: "Alexis",
   lastName: "Frantz",
     ocuppation: "Ironhack Student",
   age: 34,
   hobbies: [
     "Music",
     "Guitar Playing",
     "Piano",
     "Videogames",
     "Logic Games",
     "Stoicism",
   ],
   skills: {
     Videogames: "God Tier",
     Stoicisim: "never enough",
     guitar: ["Acoustic", "Electronic"],
     instruments: {
       percussion: ["Drums", "Toms", "Snares", "Cymbal"],
       string: ["Guitar", "Bass", "Cuatro"],
     },
   },
 };
userInformation.hobbies[0] = "Music";
console.log(`Hi, my name is ${userInformation.firstName} ${userInformation.lastName}, I am ${userInformation.age} years old and my main hobby is ${userInformation.hobbies[0]}`);

userInformation.hobbies[0] = "Videogames";
console.log(`Hi, my name is ${userInformation.firstName} ${userInformation.lastName}, I am ${userInformation.age} years old and my main hobby is ${userInformation.hobbies[0]}`);

userInformation.hobbies[0] = "Sudokus";
console.log(`Hi, my name is ${userInformation.firstName} ${userInformation.lastName}, I am ${userInformation.age} years old and my main hobby is ${userInformation.hobbies[0]}`);

userInformation.hobbies[0] = "Gardening";
console.log(`Hi, my name is ${userInformation.firstName} ${userInformation.lastName}, I am ${userInformation.age} years old and my main hobby is ${userInformation.hobbies[0]}`);

userInformation.hobbies[0] = "Chillin'";
console.log(`Hi, my name is ${userInformation.firstName} ${userInformation.lastName}, I am ${userInformation.age} years old and my main hobby is ${userInformation.hobbies[0]}`);

