
const kevs = {
    name: 'Kevs',
    age: 21
};

const cousin = {
    name: 'The Cousin',
    age: 12,
    isWithAdult: true
};

const younger = {
    name: 'Young',
    age: 10
};

const pgStarWars7 = 13;
const starWars7 = 'Star Wars: El Despertar de la Fuerza';

const canWatchStarWars7 = ( { name, age, isWithAdult = false } ) => {
    if (age >= pgStarWars7) {
        console.log(`
${name} puede pasar a ver ${starWars7}.`);
    } else if (isWithAdult) {
        console.log(`
${name} puede pasar a ver ${starWars7}.
Aunque su edad es de ${age}, se encuentra acompañada/o por un adulto.`);
    } else {
        console.log(`
${name} no puede pasar a ver ${starWars7}.
Tiene ${age} años y necesita tener ${pgStarWars7}.`);
    };
};

canWatchStarWars7(kevs);
canWatchStarWars7(cousin);
canWatchStarWars7(younger);
