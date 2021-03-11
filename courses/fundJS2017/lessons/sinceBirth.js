const myBirth = new Date(1998, 11, 4);

const today = new Date();

const time = today - myBirth; // miliseconds

const timeSeconds = time / 1000;
const timeMinutes = timeSeconds / 60;
const timeHours = timeMinutes / 60;
const timeDays = timeHours / 24;
const timeMonths = timeDays / 30;
const timeYears = timeDays / 365;

console.log(`You're ${Math.floor(timeYears)} years old.`);

const nextBirthday = new Date(
  today.getFullYear(),
  myBirth.getMonth(),
  myBirth.getDate()
);

console.log(nextBirthday);

const daysWeek = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

console.log(daysWeek[nextBirthday.getDay()]);
