dolares = input("¿Cuántos dólares tienes?: ")
dolares = float(dolares)
valor_peso = 0.045
pesos = dolares / valor_peso
pesos = round(pesos, 2)
pesos = str(pesos)

print("Tienes $" + pesos + " pesos")