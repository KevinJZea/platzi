#include <stdio.h>
#include <stdlib.h>
#include "library.h"

int main()
{
    float firstValue = 10;
    float secondValue = 15;
    float result;
    int option;

    printf("Calculator \n");
    printf("What operation would you like to do? \n");
    printf("1. Addition | 2. Substraction | 3. Multiplication | 4. Division \n");
    printf("Choose a number: \n");

    scanf("%i", &option);

    switch (option)
    {
    case 1:
        result = addition(firstValue, secondValue);
        break;

    case 2:
        result = substraction(firstValue, secondValue);
        break;

    case 3:
        result = multiplication(firstValue, secondValue);
        break;

    case 4:
        result = division(firstValue, secondValue);
        break;

    default:
        break;
    }

    printf("The result is: %f \n", result);

    return 0;
}
