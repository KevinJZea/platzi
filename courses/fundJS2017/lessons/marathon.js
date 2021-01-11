const Name = "Kevs";
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function run() {
  const min = 5;
  const max = 15;
  //   return Math.floor(Math.random() * (max - min)) + min;
  return Math.round(Math.random() * (max - min)) + min;
}

let totalKms = 0;
const length = days.length;

for (let i = 0; i < length; i++) {
  const kms = run();

  totalKms = totalKms + kms;

  //   console.log(`The day ${i + 1} is ${days[i]}`);
  console.log(`On ${days[i]}, ${Name} ran ${kms} kms.`);
}

const avgKms = totalKms / length;
console.log(`On average, ${Name} ran ${avgKms.toFixed(2)} kms per day.`);
