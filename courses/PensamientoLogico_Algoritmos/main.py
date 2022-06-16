def swap_text(s):
    result = ""

    for letter in s:
        
        if letter == letter.upper():
            result += letter.lower()
        else:
            result += letter.upper()

    print(result)


texto = "HOLA a TOdos"
swap_text(texto)