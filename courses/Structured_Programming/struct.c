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

    return 0;
}
