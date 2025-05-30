# Calcular o IMC

altura = float(input('Digite a sua altura: '))

peso = float(input('Digite seu peso: '))


# Função para calcular IMC e condicional aninhada para definir a saida
def Calculo(x, y):

    imc = peso / (altura * altura)

    if imc < 16:
        print(f'IMC {imc:.2f}: Baixo peso (grau I)')

    elif imc > 16 and imc < 16.99:
        print(f'IMC {imc:.2f}: Baixo peso (grau II)')

    elif imc > 16.99 and imc < 18.49:
        print(f'IMC {imc:.2f}: Baixo peso (grau III)')

    elif imc > 18.50 and imc < 24.99:
        print(f'IMC {imc:.2f}: Peso Adequado! ')

    elif imc > 24.99 and imc < 29.99:
        print(f'IMC {imc:.2f}: Sobrepeso')

    elif imc > 29.99 and imc < 34.99:
        print(f'IMC {imc:.2f}: Obesidade (grau I)')

    elif imc > 34.99 and imc < 39.99:
        print(f'IMC {imc:.2f}: Obesidade (grau II)')

    elif imc > 39.99:
        print(f'IMC {imc:.2f}: Obesidade (grau III)')

    else:
        print('Erro Valor invalido')

#resultado = Calculo(altura, peso)
Calculo(altura, peso)

print('\n Para sua saude.. beba agua! ')
