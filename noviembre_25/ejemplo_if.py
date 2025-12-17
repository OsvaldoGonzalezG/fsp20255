'''
tabla de verdad de Y (and)
v y v = v
v y f = f
f y v = f
f y f = f

tabla de verdad de o (or)
v o v = v
v o f = v
f o v = v
f o f = f

'''

edad=25

if(edad <50 and edad > 35): #verdadero y falso = falso
    print("adulto")
elif (edad >=18):
    print("adulto")
elif (edad <30 and edad > 20):
    print("adulto joven")

else:
    print("menor")

#aca sigue ejecutando el programa    