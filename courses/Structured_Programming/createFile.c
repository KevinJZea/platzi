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
    FILE *file;

    file = fopen("archivo001.dat", "w");

    if (file != NULL)
    {
        printf("File was created successfully!\n");
        printf("Please verify in the folder it has been created. \n");
        fclose(file);
    }
    else
    {
        printf("File was not created. \n");
    }

    return 0;
}
