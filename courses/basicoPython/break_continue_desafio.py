# math.pi sólo tiene 15 caracteres.
# El programa busca un número dentro de esos 15
import math

def run():
    num = input('Escribe el número que quieres buscar en pi: ')
    print("")

    for num_a in str(math.pi):
        if num_a == num:
            break
        print(num_a)


if __name__ == '__main__':
    run()