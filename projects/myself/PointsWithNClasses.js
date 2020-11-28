
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

/* In this program, we can insert a N number
of classes I would take per day and see how
many points I would have at the end of my suscription. */

let classes, points, classesInTotal;
let pointsInTotal = currentPoints;

const HowManyPointsWithNClasses = (N) => {
    pointsInTotal = currentPoints;
    classes = N;
    classesInTotal = 0;
    points = 0;

    for (let i = 0; i < daysLeft; i++) {
        points = 0;
        classes = N;
        classesInTotal += classes;
        
        if (classesInTotal >= 30) {
            points += 200;
            classesInTotal -= 30;
        }
        
        points += classes;
        pointsInTotal += points;
    }

    console.log(`In ${daysLeft} days, taking ${N} classes per day, your points would end up in ${pointsInTotal}.`);
};

HowManyPointsWithNClasses(5);
HowManyPointsWithNClasses(10);
HowManyPointsWithNClasses(15);
HowManyPointsWithNClasses(20);