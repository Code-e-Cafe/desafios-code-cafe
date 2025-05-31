# Verificador de Número Primo Recebe um número e diz se ele é primo ou não

num = int(input('Digite um número para saber se ele é primo: '))

start = 1
cont = 0

# percorrendo de 0 até o num 
for numero in range(start , num + 1):
    # condicional para verificar se o num é divisivel pelo numero que esta sendo percorrido
    if num % numero == 0:
        cont += 1 
    numero += numero
# se o num for divisivel somente duas vezes (no caso por 2 e por ele mesmo) ele é um numero primo
if cont == 2:
    print(f'O valor {num} é um número primo')
else:
    print(f'O valor {num} não é um número primo')
