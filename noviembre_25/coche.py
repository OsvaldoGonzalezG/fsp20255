from datetime import datetime

class Coche:


    def __init__(self,p_marca,p_modelo,p_year,p_color):
        self.marca=p_marca
        self.modelo=p_modelo
        self.year=p_year
        self.color=p_color

    def detalles(self):
        print(f"Marca:{self.marca},modelo:{self.modelo},year:{self.year},color:{self.color}")

        #este método especial nos permite usar el método print para ver los atributos del objeto
    def __str__(self):
        return f"Marca:{self.marca},modelo:{self.modelo},year:{self.year},color:{self.color}"
        

marca=input("Ingrese la marca:")
color=input("Ingrese el color:")
modelo=input("Ingrese el modelo:")
year=int(input("Ingrese el año"))

auto1=Coche(marca,modelo,year,color)
if (year >=2022):
    print("Es un coche nuevo")
else:
    print("Es un coche viejo")    

while (True):
    print("Elija una opción")
    print("a) modificar marca")
    print("b) modificar modelo")
    print("c) modificar year")
    print("d) modificar color")
    print("e) salir")
    opcion=input("Ingrese su selección: ")
    if opcion == "a":
        #intrucciones para modificar marca
        pass
    elif opcion =="b":
        #instrucciones para modificar modelo
        pass
    elif opcion =="c":
        #instrucciones para modificar año
        pass
    elif opcion =="d":
        #instrucciones para modificar color
        pass
    elif opcion =="e":    
        break
    else:
        print("Opción no valida")
        continue

#auto1.detalles()
print(auto1)






