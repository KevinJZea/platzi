
def division(x, y):
    print(x / y)

def multiplication(x, y):
    print(x * y)

def substract(x, y):
    print(x - y)

def add(x, y):
    print(x + y)
    

def calculator(num1, operator, num2):
    
    if operator == "+":
        add(num1, num2)

    elif operator == "-":
        substract(num1, num2)

    elif operator == "*":
        multiplication(num1, num2)

    elif operator == "/":
        division(num1, num2)

    else:
        print("Your operator isn't correct. Try again.")
        


if __name__ == "__main__":
    print("""
    Hi! Welcome to the calculator.
    Here, you'll be able to add, substract, multiply or divide two numbers.
    
    ***OPERATORS***
    Use + to add.
    Use - to substract.
    Use * to multiply.
    Use / to divide.
    
    """)
    num1 = int(input("Write the first number: "))
    operator = str(input("Write the operator: "))
    num2 = int(input("Write the second number: "))
    calculator(num1, operator, num2)