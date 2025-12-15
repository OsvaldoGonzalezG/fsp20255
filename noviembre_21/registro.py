#esto es una lista, uno de los tipos iterables que posee python
#usuarios_registrados=[]
#usuarios_registrados[0]='yerko'

#esto es un diccionario, otro de los tipos iterables que posee python
usuarios_registrados={}
#un diccionario vacio se ve así:
#{}
#usuarios_registrados
#{'yerko':28 ,'karina':18 ,'gloria':19 }


def registrar_usuario(nombre,edad):
    usuarios_registrados[nombre]=edad
    return True

def esta_registrado(nombre):
    if nombre in usuarios_registrados:
        #usuarios_registrados.append(nombre)
        return True
    else:
        return False
    
def es_mayor_de_edad(edad):
    if edad >=18:
        return True
    else:
        return False