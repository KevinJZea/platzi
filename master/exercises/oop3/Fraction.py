
class Fraction:

    def __init__(self, fraction1, fraction2):
        self.fraction1 = fraction1
        self.fraction2 = fraction2


    def get_Fraction1(self):
        return self.fraction1

    def set_Fraction1(self, value):
        self.fraction1 = value


    def get_Fraction2(self):
        return self.fraction1

    def set_Fraction2(self, value):
        self.fraction2 = value


    def add(self, fraction1, fraction2):
        return fraction1 + fraction2


    def substract(self, fraction1, fraction2):
        return fraction1 - fraction2


    def multiply(self, fraction1, fraction2):
        return fraction1 * fraction2


    def divide(self, fraction1, fraction2):
        return fraction1 / fraction2
