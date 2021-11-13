def run():
    sum = 0
    n = int(input ("¿Cuantos entreros quieres sumar? "))
    for i in range(1, n):
        sum = sum + i
    print('La suma de los primeros ' +  str(n) + ' numeros naturales es :', sum) 


if __name__ == '__main__':
    run()