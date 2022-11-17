console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "Alexis";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Frantz";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver's name is ${hacker1}`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}
// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let i = 0;
let arr = [];
while (i < hacker1.length) {
    arr.push(" ");
    arr[i] = (hacker1[i].toUpperCase());
    i++;
}
console.log(arr.join(" "));
// Using native methods
let upperCaseName = hacker1.toUpperCase().split("").join(" ");
console.log(upperCaseName);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
function reverseName(){
    let splitName = hacker2.split("");
    let reverseName = splitName.reverse();
    let nameReversed = reverseName.join("");
    return nameReversed;
  }
  
  console.log(reverseName());

//3.3 Depending on the lexicographic order of the strings, print:
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
  } else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.")
  } else {
    console.log("What?! You both have the same name?")
  };

//Bonus 1:
//Go to lorem ipsum generator and:
//Generate 3 paragraphs. Store the text in a variable type of string.
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus ullamcorper commodo. Quisque aliquet pretium bibendum. Sed vitae faucibus lorem. Pellentesque cursus, sem eu gravida consectetur, risus magna pulvinar tellus, eget consequat orci diam sed urna. Proin mattis urna sit amet nunc venenatis ornare. Donec accumsan facilisis ante, sed aliquet risus malesuada eget. Sed efficitur nisl nec gravida pharetra. Maecenas vitae lectus sem. Donec cursus id nulla quis feugiat. Morbi convallis tortor ut nibh placerat, vel malesuada justo accumsan. Proin et sem hendrerit, pharetra metus ac, hendrerit purus. Pellentesque a sem tortor. Integer condimentum purus a gravida lobortis. Sed et tellus vitae tortor congue scelerisque eget nec nisi. Vivamus dapibus finibus laoreet. Aliquam ullamcorper egestas velit, laoreet rhoncus nibh tempus vitae. Duis tempus placerat lectus, vitae cursus nunc. Nulla vehicula, eros volutpat vehicula aliquet, erat est fringilla orci, vestibulum mollis augue odio quis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum neque lorem, tempus cursus velit eu, auctor mattis elit. Maecenas varius lacinia nunc, sed tempus dui ullamcorper ac. Proin scelerisque feugiat dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Nunc lacinia dolor vel nunc pharetra ullamcorper."


//Make your program count the number of words in the string.
function countWords() {
    return loremIpsum.split(" ").length+1;
}

console.log(countWords());

//Make your program count the number of times the Latin word et appears.
function countEt() {
    return loremIpsum.split(" et ").length;
}
console.log(countEt());

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.
let word = "A man, a plan, a canal, Panama!";
function palindromeChecker() {
  let noSigns = word.replace("[^0-9a-zA-Z]", "").toUpperCase();
  let checker = noSigns.split("").reverse().join("");
  if (checker === noSigns) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromeChecker());