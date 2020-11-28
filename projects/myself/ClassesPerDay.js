
/* This program has the purpose of showing how many 
Platzi classes I should take per day to achieve
150,000 before Dec 24th, 2023. */

const miliseconds = 1000;
const seconds = 60;
const minutes = 60;
const hours = 24;

const endDate = (new Date(2023, 11, 24)) / (miliseconds * seconds * minutes * hours);
const today = (new Date) / (miliseconds * seconds * minutes * hours);
const daysLeft = parseInt(endDate - today);

const currentPoints = 27910;
const goal = 150000;
const pointsLeft = goal - currentPoints;


/* We must consider that the average Platzi course
has around 30 classes. This means we could get at least
230 points per course when passing the exam. */





