#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main()
{
    printf("Hello world!\n");

    int integerA = 1;
    float floatA = 1.1;
    double doubleA = 1.2;
    char letterA = 'A';
    bool boolean = false;

    printf("The value of integerA is: %i\n", integerA);
    printf("The value of floatA is: %f \n", floatA);
    printf("The value of doubleA is: %f \n", doubleA);
    printf("The value of letterA is: %c \n", letterA);

    printf("Enter the new value of integerA: ");
    scanf("%i", &integerA);
    printf("The new value of integerA is: %i\n", integerA);

    printf("Enter the new value of floatA: ");
    scanf("%f", &floatA);
    printf("The new value of floatA is: %f\n", floatA);

    printf("Enter the new value of letterA: ");
    scanf(" %c", &letterA);
    printf("The new value of letterA is: %c\n", letterA);

    return 0;
}
