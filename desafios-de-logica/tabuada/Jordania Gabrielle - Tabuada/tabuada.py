# tabuada de 0 a 10

numero = int(input('Digite um número para saber sua tabuada:  '))

cont = 0

while cont < 10:
    cont += 1
    
    resultado = numero * cont

    print(f'{numero} x {cont} = {resultado}')