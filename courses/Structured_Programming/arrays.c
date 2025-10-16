#include <stdio.h>
#include <stdlib.h>

int main()
{
    int integerList[3];
    integerList[0] = 1;
    integerList[1] = 2;
    integerList[2] = 3;

    float floatList[] = {23.4, 34.5, 45.6, 56.7};

    char charList[4];
    charList[0] = 'K';
    charList[1] = 'e';
    charList[2] = 'v';
    charList[3] = 's';

    printf("\n First integer: \t\t %i", integerList[0]);
    printf("\n Last float: \t\t %f", floatList[3]);
    printf("\n Char List: \t\t %c%c%c%c. \n", charList[0], charList[1], charList[2], charList[3]);

    return 0;
}
