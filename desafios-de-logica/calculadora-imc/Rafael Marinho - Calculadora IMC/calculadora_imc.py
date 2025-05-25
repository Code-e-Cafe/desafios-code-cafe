# 🚀 Desafios Code & Café ☕️

class CalculadoraIMC:
    def __init__(self, peso, altura):
        self.peso = peso
        self.altura = altura
    
    def calcular_imc(self):
        """
        Calcula o IMC (Índice de Massa Corporal) com base no peso e altura fornecidos.
        O IMC é calculado pela fórmula: peso / (altura * altura)
        """
        imc = self.peso / (self.altura ** 2)
        return imc
    def classificar_imc(self):
        """
        Classifica o IMC de acordo com as faixas estabelecidas pela Organização Mundial da Saúde (OMS).
        As faixas são:
        - Abaixo do peso: IMC < 18.5
        - Peso normal: 18.5 <= IMC < 24.9
        - Sobrepeso: 25 <= IMC < 29.9
        - Obesidade grau 1: 30 <= IMC < 34.9
        - Obesidade grau 2: 35 <= IMC < 39.9
        - Obesidade grau 3: IMC >= 40
        """
        imc = self.calcular_imc()
        if imc < 18.5:
            return f"Abaixo do peso"
        elif 18.5 <= imc < 24.9:
            return f"Peso normal"
        elif 25 <= imc < 29.9:
            return f"Sobrepeso"
        elif 30 <= imc <34.9:
            return f"Obesidade Grau 1"
        elif 35 <= imc < 39.9:
            return f"Obesidade Grau 2"
        else:
            return f"Obesidade Grau 3"
    def __str__(self):
        """
        Retorna uma representação em string do objeto CalculadoraIMC, incluindo o IMC calculado e sua classificação.
        """
        imc = self.calcular_imc()
        classificacao = self.classificar_imc()
        return f"IMC: {imc:.2f}, Classificação: {classificacao}"
# Exemplo de uso
if __name__ == "__main__":
    peso = float(input("Digite seu peso em kg: "))
    altura = float(input("Digite sua altura em metros: "))
    
    calculadora = CalculadoraIMC(peso, altura)
    print(calculadora)
    
    
# Rafael Marinho - Calculadora IMC
# Desafio: Criar uma calculadora de IMC (Índice de Massa Corporal)
# Descrição: A calculadora recebe o peso e a altura do usuário, calcula o IMC e classifica de acordo com as faixas da OMS.
# Data: 2025-24-05