# import random

# def run(wins):
#     user_weapon = str(input("Select your weapon: "))
#     game(user_weapon)


# def game(user_weapon):
#     weapons = ['rock', 'paper', 'scissors']

#     machine_weapon = str(random.choice(weapons))
    
#     if machine_weapon == 'rock':
#         rock(user_weapon)


# def rock(user_weapon):

#     if user_weapon == 'rock':
#         print("It's a draw. Try again.")
#         run()

#     elif user_weapon == 'paper':
#         print()


# def user_wins():
#     print("""
# CONGRATS! You have won against the machine!
#     """)

# # -------------------------------------------

# if __name__ == "__main__":
#     print("""
# ROCK, PAPER AND SCISSORS

# Whoever, the machine or you, achieves two victories, will be the winner.

# Write rock, paper or scissors.
#     """)

#     wins = int(input("How many victories should the winner get?: "))
#     run(wins)





import random


def user_wins(user_points, machine_points):
    user_points += 1
    print(f"""

CONGRATS! You won 1 point.

Machine {machine_points} - {user_points} You
    """)

    return user_points, machine_points



def machine_wins(user_points, machine_points):
    machine_points += 1
    print(f"""

The machine won 1 point!

Machine {machine_points} - {user_points} You
    """)

    return user_points, machine_points


def draw(user_points, machine_points):
    print(f"""
It's a draw.
Machine {machine_points} - {user_points} You
    """)

    return user_points, machine_points


def process(machine_weapon, weapon_to_win, weapon_to_lose, user_points, machine_points):
    if machine_weapon == weapon_to_win:
        user_points, machine_points = machine_wins(user_points, machine_points)
    elif machine_weapon == weapon_to_lose:
        user_points, machine_points = user_wins(user_points, machine_points)
    else:
        user_points, machine_points = draw(user_points, machine_points)

    return user_points, machine_points


def scissors(machine_weapon, user_points, machine_points):

    user_points, machine_points = process(machine_weapon, 'rock', 'paper', user_points, machine_points)
    return user_points, machine_points


def paper(machine_weapon, user_points, machine_points):

    user_points, machine_points = process(machine_weapon, 'scissors', 'rock', user_points, machine_points)
    return user_points, machine_points


def rock(machine_weapon, user_points, machine_points):
    
    user_points, machine_points = process(machine_weapon, 'paper', 'scissors', user_points, machine_points)
    return user_points, machine_points
    


def machine_select_weapon(user_weapon, user_points, machine_points):
    weapons = ['rock', 'paper', 'scissors']

    machine_weapon = random.choice(weapons)
    print(f'The machine chose {machine_weapon}')
    
    if user_weapon == 'rock':
        user_points, machine_points = rock(machine_weapon, user_points, machine_points)

    elif user_weapon == 'paper':
        user_points, machine_points = paper(machine_weapon, user_points, machine_points)

    elif user_weapon == 'scissors':
        user_points, machine_points = scissors(machine_weapon, user_points, machine_points)

    else:
        print("""
Invalid weapon. Try again.
        """)

        user_select_weapon(user_points, machine_points)
    
    return user_points, machine_points


def user_select_weapon(user_points, machine_points):
    user_weapon = str(input("""------------------------------

Select your weapon: """))
    user_points, machine_points = machine_select_weapon(user_weapon, user_points, machine_points)

    return user_points, machine_points


def logic(user_points, machine_points, points_to_win):
    
    user_points, machine_points = user_select_weapon(user_points, machine_points)

    return user_points, machine_points



def welcome():

    print("""
ROCK, PAPER AND SCISSORS

Write rock, paper or scissors.
    """)

    points_to_win = int(input("""How many points should the winner get?: """))

    machine_points = 0
    user_points = 0

    while user_points < points_to_win and machine_points < points_to_win:
        user_points, machine_points = logic(user_points, machine_points, points_to_win)
    
    if user_points == points_to_win:
        print(f"""------------------------------

You got {points_to_win} points!
You won the game
""")

    elif machine_points == points_to_win:
        print(f"""------------------------------

The machine got {points_to_win} points!
It won the game
""")



if __name__ == "__main__":
    welcome()
