#operadores aritméticos

#para convertir un tipo de dato (str) a otro (int) se usa el método int

ok=0

try: #try nos sirve para INTENTAR realizar una acción "peligrosa" para el programa
    primero=int(input ("Ingrese el primer numero:"))
    segundo=int(input("Ingrese el segundo numero:"))
    print(f"La suma de los numeros es {primero+segundo}")
    print(f"La resta de los numeros es {primero-segundo}")
    print(f"La multiplicación de los numeros es {primero*segundo}")
    print(f"La división de los numeros es {primero/segundo}")   
    print(f"esta dividiendo por cero!")
    print(f"El resto de la división de los numeros es {primero%segundo}")
    ok=1
except ZeroDivisionError:
    print(f"Esta dividiendo por cero!")   
except:
    print("Usted ha ingresado un valor que no es un número")

#OPERADORES DE COMPARACIÓN

if (primero > segundo):
    print("el primero es mayor")
elif(primero<segundo):
    print("el segundo es mayor")        
else:
    print("son iguales")

#OPERADORES LÓGICOS, en javascript: 5=="5" por valor, 5=="5" a nivel de byte

if (ok==1 and primero >18):
    print("todo bien y mayor de edad")
elif (ok==0 or primero >18):
    print("problema o mayor a 18")    
else:
    print("estamos con problemas")    


