def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b
class Calculadora:
    def multiplicar(self, a, b):
        return a * b
    
    def dividir(self, a, b):
        if b == 0:
            print("Error: No se puede dividir por cero.")
            return None
        return a / b
    
 