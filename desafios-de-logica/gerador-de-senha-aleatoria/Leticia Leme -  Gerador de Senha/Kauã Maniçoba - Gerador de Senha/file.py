import random

senha = ""
caracteres ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"

tamanho = int(input("Quantos digitos vai ter a senha? "))
for digito in range(tamanho):
    aleatorio = random.choice(caracteres)
    senha += aleatorio    
print (f"{senha}")