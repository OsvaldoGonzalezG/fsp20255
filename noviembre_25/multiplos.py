
entrada = input("3:")

numero = int(entrada)

if numero % 2 == 0 and numero % 3 == 0:
    print(f"El número {numero} es par y también múltiplo de 3")

elif numero % 2 == 0:
    print(f"El número {numero} es par solamente")

elif numero % 2 != 0 and numero % 3 == 0:
    print(f"El número {numero} es impar y múltiplo de 3")

else:
    print(f"El número {numero} es impar y no es múltiplo de 3")