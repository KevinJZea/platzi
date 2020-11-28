
// https://platzi.com/comunidad/platzicodingchallenge-dia-4-repite-la-palabra/


let word = prompt('Write a word: ');
let times = parseInt(prompt('How many times do you want to repeat it?: '));

function RepeatWord(word, times) {
    
    if (times > 0) {
        console.log(`${word} - `);
        RepeatWord(word, times-1);
    }
}

RepeatWord(word, times);

