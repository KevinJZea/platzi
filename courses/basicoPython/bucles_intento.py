def run():
    num = int(input('¿Qué número quieres elevar al cuadrado?: '))
    i = int(input('¿Cuántas veces?: '))
    num_nuevo = num
    while i > 1:
        num_nuevo = num_nuevo * num
        i = i - 1
        print(num_nuevo)


if __name__ == '__main__':
    run()