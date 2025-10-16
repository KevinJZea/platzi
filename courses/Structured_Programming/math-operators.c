#include <stdio.h>
#include <stdlib.h>

int main()
{
    int addition;
    float substraction;
    float division;
    float multiplication;
    int module;

    addition = 7 + 3;
    substraction = 7.1 - 3.1;
    division = 7.0 / 3.0;
    multiplication = 7 * 3;
    module = 7 % 3;

    printf("Addition result %i\n", addition);
    printf("substraction result %f\n", substraction);
    printf("division result %f\n", division);
    printf("multiplication result %f\n", multiplication);
    printf("module result %i\n", module);

    return 0;
}
