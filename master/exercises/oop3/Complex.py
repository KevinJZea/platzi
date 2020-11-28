
class Complex:

    def __init__(self, real, imag=0.0):
        self.real = real
        self.imag = imag


    def get_real(self):
        return self.real

    def set_real(self, value):
        self.real = value


    def get_imag(self):
        return self.imag

    def set_imag(self, value):
        self.imag = value


    def add(self, other):
        return Complex(self.real + other.real, self.imag + other.imag)


    def substract(self, other):
        return Complex(self.real - other.real, self.imag - other.imag)


    def multiply(self, other):
        return Complex(self.real*other.real - self.imag*other.imag,
            self.imag*other.real + self.real*other.imag)


    def divide(self, other):
        r = (other.real**2 + other.imag**2)
        return Complex((self.real*other.real - self.imag*other.imag)/r,
            (self.imag*other.real + self.real*other.imag)/r)

