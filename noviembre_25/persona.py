#objetos van a poseer dos miembros
#1.- los atributos
#2.- los métodos == acciones que puede realizar


class Persona:
    #metodo constructor
    def __init__(self,nombre,edad):
        self.nombre=nombre
        self.edad=edad
#los metodos que son de ISNTANCIA deben tener como primer parametro "self"
     
    def saludar(self):
        print(f"Hola mi nombre es:{self.nombre} y mi edad es:{self.edad}")

#los otros tipos de metodos tendran un modificador al inicio


#primero vamos a INSTANCIAR LA CLASE == crear un objeto de la clase

persona1= Persona ("Pedro", 32)

persona1.saludar()

