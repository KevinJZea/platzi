
def area(base, altura):

    print(f'El área es igual a {base * altura / 2}')


def tipo_triangulo(base, altura):

    if altura == (3**(1/2) * base**2) / 4:
        print(f'Es un triángulo equilátero')
    else:
        print(f'Es un triángulo isósceles o escaleno')


if __name__ == "__main__":
    base = int(input("Ingresa la magnitud de la base: "))
    altura = int(input("Ingresa la magnitud de la altura: "))
    area(base,altura)
    tipo_triangulo(base, altura)