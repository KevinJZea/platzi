#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char nameC[50];
    int size;

    printf("Enter a name with gets:\n");
    gets(nameC);

    printf("The name is: ");
    puts(nameC);

    size = strlen(nameC);

    printf("\nThe string length is: %i \n", size);

    char nameInverted[50];

    for (int i = 0; i < size; i++)
    {
        printf("Entra");
        nameInverted[size - i - 1] = nameC[i];
        printf("nameC[%i]: %c \n", i, nameC[i]);
        printf("nameInverted[size - %i - 1]: %c \n", i, nameInverted[size - i - 1]);
    }

    printf("\nThe string inverted is: %s \n", nameInverted);

    return 0;
}
