var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";
var armaJugador1;
var armaJugador2;

game();

function game() {

    armaJugador1 = parseInt(prompt("Ingresa 1 para piedra, 2 para papel, 3 para tijeras"));
    armaJugador2 = parseInt(prompt("Ingresa 1 para piedra, 2 para papel, 3 para tijeras"));

    if (armaJugador1 == 1) {
        evaluarJugador2(armaJugador2, 3, 2, 1);
    }
    else if (armaJugador1 == 2) {
        evaluarJugador2(armaJugador2, 1, 3, 2);
    }
    else if (armaJugador1 == 3) {
        evaluarJugador2(armaJugador2, 2, 1, 3);
    }
    else {
        console.log("Inténtalo de nuevo");
    }
}

function evaluarJugador2(armaJugador2, gana1, gana2, draw) {

    if (armaJugador2 == gana1) {
        ganaJugador1();
    } else if (armaJugador2 == gana2) {
        ganaJugador2();
    } else if (armaJugador2 == draw) {
        empate();
    } else {
        console.log("Inténtalo de nuevo");
    }
}

function ganaJugador2() {
    console.log("Ganó el jugador 2");
}

function ganaJugador1() {
    console.log("Ganó el jugador 1");
}

function empate() {
    console.log("Empate");
}

// function conversor(armaJugador) {
//     if (armaJugador == 1) {
//         armaJugador = piedra;
//     }
//     else if (armaJugador == 2) {
//         armaJugador = papel;
//     } 
//     else if (armaJugador == 3) {
//         armaJugador = tijeras;
//     }
//     else {
//         prompt("Comienza de nuevo");
//     }
//     console.log(armaJugador);
//     return armaJugador;
// }
