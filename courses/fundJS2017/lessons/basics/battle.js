let lifeGoku = 100;
let lifeSuperman = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

const bothAreAlive = () => lifeGoku > 0 && lifeSuperman > 0;

const calculatePunch = () =>
  Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);

const gokuIsAlive = () => lifeGoku > 0;

let round = 0;

while (bothAreAlive()) {
  round++;
  console.log(`Round ${round}`);

  const punchGoku = calculatePunch();
  const punchSuperman = calculatePunch();

  if (punchGoku > punchSuperman) {
    console.log(`Goku atacks Superman with a punch of ${punchGoku}.`);
    lifeSuperman -= punchGoku;
    console.log(`Superman's life is ${lifeSuperman}.`);
  } else {
    console.log(`Superman atacks Goku with a punch of ${punchSuperman}.`);
    lifeGoku -= punchSuperman;
    console.log(`Goku's life is ${lifeGoku}.`);
  }
}

if (gokuIsAlive()) {
  console.log(`Goku won the battle. His life is ${lifeGoku}.`);
} else {
  console.log(`Superman won the battle. His life is ${lifeSuperman}.`);
}
