from car import Car
from account import Account
from user import User
from driver import Driver

if __name__ == "__main__":
    print("Hola, mundo")
    car = Car("AMS234", Account("Andres Herrera", "AND123", "and@me.com", "*****"))
    print(car.license, car.driver.name, car.driver.document)

    car2 = Car("QWE567", Account("Andrea Herrera", "ANDA876", "and@me.com", "*****"))
    print(car2.license, car2.driver.name, car2.driver.document)

    user1 = User("Armando", "ARM456", "arm@me.com", "*****")
    print(user1.name, user1.document, user1.email, user1.password)

    driver1 = Driver("Armando", "ARM456", "arm@me.com", "*****")
    print(driver1.name, driver1.document, driver1.email, driver1.password)

    
    
    