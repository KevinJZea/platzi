/* 
const myArray = ["Brasil", "Francia", "Islandia"];

myArray[0] = "Argentina";
myArray[1] = "Ghana";

myArray.unshift("Rusia");

console.log(myArray);
console.log("---".repeat(10));

// Fase 2

let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
const myArray2 = myString.split("+");

console.log(myArray2);


const arrayLength = myArray2.length;
console.log("arrayLength:", arrayLength);


// const lastItem = myArray2[arrayLength - 1];
const lastItem = myArray2.pop();
console.log("lastItem:", lastItem);
console.log("myArray2:", myArray2);

// Fase 3

let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

myArray.pop();
myArray.push("Kevs");
myArray.push("Luly");
myArray.shift();
console.log("myArray:", myArray);

const ken = myArray.findIndex(name => name === "Ken");
console.log("Ken:", ken);

const sakura = myArray.findIndex(name => name === "Sakura");
console.log("Sakura:", sakura);

// Fase 4

const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

const eBirds = birds.filter(bird => bird[0] === "E");
console.log("eBirds:", eBirds)

// Fase 5

let numbers = [63,45,58,56];

const sum = numbers.reduce((acum, number) => acum += number, 0);
console.log("Sum:", sum)

const avg = sum / numbers.length;
console.log("Avg:", avg)

const highestNum = [...numbers].sort((a,b) => b - a)[0];
console.log("highestNum:", highestNum);

const lowestNum = [...numbers].sort((a,b) => a - b)[0];
console.log("lowestNum:", lowestNum);
*/

// Fase 6

let myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];

const objUniqueLetters = [...myArray].reduce((obj, letter) => {
  if (!obj[letter]) {
    obj[letter] = 1;
  } else {
    obj[letter] += 1;
  }
  return obj;
}, {});

const uniqueLetters = Object.keys(objUniqueLetters);

console.log("uniqueLetters", uniqueLetters);

let myArrayWithNoDuplicates = myArray.reduce((previous, current) => {
  if (previous.indexOf(current) === -1) {
    previous.push(current);
  }
  return previous;
}, []);

console.log("myArrayWithNoDuplicates:", myArrayWithNoDuplicates);
