#de esta manera también podemos importar el código desde registro.py
#import registro

from registro import esta_registrado, registrar_usuario, es_mayor_de_edad

nombre = input("Ingresa tu nombre:")
edad = input("Ingresa tu edad:")

if esta_registrado(nombre) :
    print(f"el usuario {nombre} esta registrado.")
else :
    registrar_usuario(nombre, edad)
    print(f"el usuario {nombre} se registró existosamente.")

    if es_mayor_de_edad(edad):
        print(f"Eres mayor de edad!")
    else:
        print(f"No eres mayor de edad!")

print(f"Bienvenido a nuestra app{nombre}")        
            
