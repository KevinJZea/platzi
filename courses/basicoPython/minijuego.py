def juego(vidas):
    num_a = 5
    num = int(input("Ingresa un número: "))

    if num < 0 or num > 10:
        vidas -= 1
        print("Número inválido. Pierdes una vida.")
        return vidas
    elif num_a > num:
        vidas -= 1
        print("El número ingresado es menor al del sistema. Pierdes una vida.")
        return vidas
    elif num_a == num:
        print("Vaya, fue un empate.")
        return vidas
    else:
        print("Genial. Le ganaste al sistema.")
        return vidas



def run():
    print("""
    ¡Bienvenid@! Intenta escribir un número mayor
    al que genera el sistema del 1 al 10.
    Tienes 3 oportundiades.
    ¡Suerte!

    """)

    vidas = 3

    while(True):
        if vidas == 0:
            print('Fin del juego:(')
            break

        vidas = juego(vidas)
        print("Te quedan " + str(vidas) + " vidas.")
        print("")


if __name__ == '__main__':
    run()