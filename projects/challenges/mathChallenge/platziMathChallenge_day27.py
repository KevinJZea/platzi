

def cumpleanos(numero_de_personas):
    
    probabilidad_cumpleanos_mismo_dia = 1 - (364 / 365)**numero_de_personas
    redondeo = round(probabilidad_cumpleanos_mismo_dia*100, 3)

    print(f'La probabilidad de que una persona entre {numero_de_personas} cumpla años el mismo día que tú es de {redondeo}%')


if __name__ == "__main__":
    numero_de_personas = int(input("¿Cuántas personas hay en la habitación (además de ti)?: "))
    cumpleanos(numero_de_personas)
