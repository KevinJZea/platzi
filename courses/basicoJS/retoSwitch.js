var armaJugador1;
var armajugador2;

game();

function game() {
    
    armaJugador1 = parseInt(prompt("Ingresa 1 para piedra, 2 para papel, 3 para tijeras"));
    armaJugador2 = parseInt(prompt("Ingresa 1 para piedra, 2 para papel, 3 para tijeras"));

    switch (armaJugador1) {
        case 1:
            
            switch (armaJugador2) {
                
                case 1:
                    
                    empate();
                    break;
            
                case 2:
                    ganaJugador2();
                    break;
            
                case 3:
                    ganaJugador1();
                    break;
            
                default:
                    console.log("Inténtalo de nuevo");
                    break;
            }
            break;
    
        case 2:
            
            switch (armaJugador2) {
                case 1:
                    ganaJugador1();
                    break;
            
                case 2:
                    empate();
                    break;
            
                case 3:
                    ganaJugador2();
                    break;
            
                default:
                    console.log("Inténtalo de nuevo");
                    break;
            }
            break;

        case 3:
            
            switch (armaJugador2) {
                case 1:
                    ganaJugador2();
                    break;
            
                case 2:
                    ganaJugador1();
                    break;
            
                case 3:
                    empate();
                    break;
            
                default:
                    console.log("Inténtalo de nuevo");
                    break;
            }
            break;

        default:
            console.log(armaJugador1+1);
            console.log("Inténtalo de nuevo");
            break;
    }

}


function ganaJugador1() {
    console.log("Ganó el jugador 1");
}

function ganaJugador2() {
    console.log("Ganó el jugador 2");
}

function empate() {
    console.log("Empate");
}
