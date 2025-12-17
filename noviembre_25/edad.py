bienvenido = input("Por favor, ingresa tu edad:")

edad = int(bienvenido)

if edad < 0:
    print("Error: La edad debe ser mayor o igual a cero.")
else:
    if edad <= 12:
        resultado = "Eres un niñ@"
    
    elif edad <= 17:
        resultado = "Eres adolescente"
    
    elif edad <= 64:
        resultado = "Eres adulto"
    
    else:
        resultado = "Eres adulto mayor"

    print(resultado)