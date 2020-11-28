
// https://platzi.com/comunidad/platzicodingchallenge-dia-3-reloj/

const Hour = 3600;
const Minute = 60;

function GiveSeconds(hours, minutes) {
    console.log(`
Hello. There are ${Hour*hours + Minute*minutes} in ${hours} hours and ${minutes} minutes.
`);
};

let hours = prompt('Introduce an hour: ') || 32;
let minutes = prompt('Introduce the minutes: ') || 20;
GiveSeconds(hours, minutes);