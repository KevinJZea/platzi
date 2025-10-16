#include <stdio.h>
#include <stdlib.h>

int main()
{
    int bidimensionalArray[4][4];
    bidimensionalArray[0][0] = 0;
    bidimensionalArray[0][1] = 1;
    bidimensionalArray[0][2] = 2;
    bidimensionalArray[0][3] = 3;

    bidimensionalArray[1][0] = 0;
    bidimensionalArray[1][1] = 1;
    bidimensionalArray[1][2] = 2;
    bidimensionalArray[1][3] = 3;

    bidimensionalArray[2][0] = 0;
    bidimensionalArray[2][1] = 1;
    bidimensionalArray[2][2] = 2;
    bidimensionalArray[2][3] = 3;

    bidimensionalArray[3][0] = 0;
    bidimensionalArray[3][1] = 1;
    bidimensionalArray[3][2] = 2;
    bidimensionalArray[3][3] = 3;

    printf("Value in (0,1): %i \n", bidimensionalArray[0][1]);

    return 0;
}