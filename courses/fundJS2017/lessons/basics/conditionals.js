const starWars7 = "Star Wars: El Despertar de la Fuerza";
const pgStarwars7 = 13;

const nameKevs = "Kevs";
const ageKevs = 22;

const nameBro = "Bro";
const ageBro = 12;

function canWatchStarWars7(name, age, isWithAdult) {
  if (age >= pgStarwars7) {
    alert(`${name} puede pasar a ver ${starWars7}`);
  } else if (isWithAdult) {
    alert(`${name} puede pasar a ver ${starWars7}.
    Aunque su edad es ${age}, se encuentra acompañada/o por un adulto.`);
  } else {
    alert(`${name} no puede pasar a ver ${starWars7}.
        Tiene ${edad} y necesita tener ${starWars7}`);
  }
}

canWatchStarWars7(nameBro, ageBro);
canWatchStarWars7(nameKevs, ageKevs);
