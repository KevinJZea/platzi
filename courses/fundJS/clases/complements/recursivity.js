
/*
    13 / 4

    13 - 4 = 9
    9 - 4 = 5
    5 - 4 = 1
    1 - 4 = -3
*/


function divisionEntera(dividendo, divisor) {
    if (dividendo < divisor) {
        return 0;
    } else {
        return 1 + divisionEntera(dividendo - divisor, divisor);
    }
}
