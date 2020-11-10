from Person import Person
from I_Speed import I_Speed_Biker

class Biker(Person, I_Speed_Biker):

    def __init__(self, name):
        super().__init__(name)

    def speed(self, speed):
        print(f"I'm riding at {speed} km/hr")
