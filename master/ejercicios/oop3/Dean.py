
class Dean:

    def __init__(self, name, age, position='Dean'):
        self.name = name
        self.age = age
        self.position = position

    def introduce(self):
        return f"Hi! I'm {self.name}. I'm {self.age} and I'm a {self.position}."

    def walk(self):
        return f"I'm walking."


class Teacher(Dean):

    def __init__(self, name, age, position='Teacher'):
        super().__init__(name, age, position)


    def teach(self):
        return f"I'm teaching."


class Student(Dean):

    def __init__(self, name, age, position='Student'):
        super().__init__(name, age, position)

    def study(self):
        return f"I'm studying."


# if __name__ == "__main__":
#     matt = Dean('Matt', 48)
#     bob = Teacher('Bob', 36)
#     kyle = Student('Kyle', 17)

#     print(matt.introduce(), matt.walk())
#     print(bob.introduce(), bob.teach())
#     print(kyle.introduce(), kyle.walk(), kyle.study())
