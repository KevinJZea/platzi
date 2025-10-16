#include <stdio.h>
#include <stdlib.h>

struct personalData
{
    char name[20];
    char lastName[20];
    int age;
};

int main()
{
    struct personalData person;

    FILE *file;
    /* file = fopen("personal_data001.dat", "wb"); */
    file = fopen("personal_data001.dat", "rb");

    if (file != NULL)
    {
        /* fflush(stdin);

        printf("Write your name: \n");
        gets(person.name);

        printf("Write your last name: \n");
        gets(person.lastName);

        printf("Write your age: \n");
        scanf("%i", &person.age);

        printf("\n");
        printf("\n");
        printf("Name: %s\n", person.name);
        printf("Last name: %s\n", person.lastName);
        printf("Age: %i\n", person.age);

        fwrite(&person, sizeof(person), 1, file); */

        fread(&person, sizeof(person), 1, file);

        printf("Name: %s\n", person.name);
        printf("Last name: %s\n", person.lastName);
        printf("Age: %i\n", person.age);

        fclose(file);
    }
    else
    {

        printf("The file was not created successfully.\n");
    }

    return 0;
}
