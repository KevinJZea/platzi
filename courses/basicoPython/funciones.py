def imprimir_mensaje():
    print('')
    print('Mensaje especial: ')
    print('¡Estoy aprendiendo a usar funciones!')
    print('')
imprimir_mensaje()


def conversation(message):
    print('Hola')
    print('Cómo estás')
    print('Elegiste la opción ' + message)
    print('Adiós')

option = input('Elige una opción (1, 2, 3): ')
if option == '1':
    conversation('1')
elif option == '2':
    conversation('2')
elif option == '3':
    conversation('3')
else:
    print('Escribe la opción correcta')


def conversacion(mensaje):
    print('Hola')
    print('Cómo estás')
    print(mensaje)
    print('Adiós')

opcion = int(input('Elige una opción (1, 2, 3): '))
if opcion == 1:
    conversacion('Elegiste la opción 1')
elif opcion == 2:
    conversacion('Elegiste la opción 2')
elif opcion == 3:
    conversacion('Elegiste la opción 3')
else:
    print('Escribe la opción correcta')

