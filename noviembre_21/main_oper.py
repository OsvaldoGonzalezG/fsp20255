import operaciones

#probar funciones
print("suma", operaciones.sumar(5, 3))
print("resta", operaciones.restar(10, 4))

#usar clase calculadora

calc = operaciones.Calculadora() #se INSTANCIAR un objeto de tipo Calculadora

print("Multiplicación", calc.multiplicar(6, 7))
print("División", calc.dividir(20, 5))