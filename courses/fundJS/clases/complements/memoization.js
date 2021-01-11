
/*

    !6 = 6 * 5 * 4 * 3 * 2 * 1
    
    !12 = 12 * 11 * 10 * 9 * 8 * 7 * !6

*/


function factorial(numero) {

    if (!this.cache) {
        this.cache = {};
    }

    if (this.cache[numero]) {
        return this.cache[n];
    }

    if (numero === 1) {
        return 1;
    }

    this.cache[n] = numero * factorial(numero - 1);
    return this.cache[n];
}
