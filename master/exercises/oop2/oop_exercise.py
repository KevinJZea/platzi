from Person import Person
from Biker import Biker

def main():
    person = Person('David')
    person.move(5)

    biker = Biker('Daniel')
    biker.speed(30)


if __name__ == "__main__":
    main()