def lineal_complexity(list):
    sum = 0
    multiplication = 1

    for num in range(len(list)):
        sum += num

    for num in range(len(list)):
        multiplication *= num

    return sum, multiplication

def lineal_complexity_2(list):
    calc = 0

    for i in range(len(list)):
        for j in range(1, 5):
            calc += (i*j)

    return calc