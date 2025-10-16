#include <stdio.h>
#include <stdlib.h>

int main()
{
    float val;
    float *pointerVal;

    pointerVal = &val;

    *pointerVal = 3.1416;

    printf("val's value is %f\n", val);

    return 0;
}
