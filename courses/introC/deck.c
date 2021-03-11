// enum designElements (
//     ITALICS = 1;
//     BOLD = 2;
//     STRIKE = 3;
// )

#include <stdio.h>

enum deck
{
    club = 0,
    diamonds = 5,
    hearts = 10,
    spades = 15
} card;

int main()
{
    card = spades;
    printf("Card power %d", card);
    printf("Size of variable %d", sizeof(card));
    return 0;
}
