
def segundos(horas, minutos):
    
    segundos = horas * 3600 + 60 * minutos
    print(f'En {horas} horas y {minutos} minutos, hay {segundos} segundos')


if __name__ == "__main__":
    horas = int(input(f'Ingresa el número de horas: '))
    minutos = int(input(f'Ingresa el número de minutos: '))
    segundos(horas, minutos)
