
def repetir(palabra, veces, contador=0):
    if contador < veces:
        contador += 1
        print(palabra)
        repetir(palabra, veces, contador)
    return palabra

if __name__ == "__main__":
    palabra = str(input(f'Ingresa la palabra que quieres repetir: '))
    veces = int(input(f'¿Cuántas veces la quieres repetir?: '))
    repetir(palabra, veces)