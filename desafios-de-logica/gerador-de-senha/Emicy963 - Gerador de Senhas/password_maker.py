import random

def gerar_senhas(caracteres:dict, comprimento:int, criterios:list)->str:
    # Verificando se foi selecionado algum critério
    if not criterios:
        return "Selecione ao menos um critério."

    # Montando o conjunto de caracteres válidos
    caracteres_possiveis = ""
    for criterio in criterios:
        caracteres_possiveis += caracteres[criterio]

    # Adicionar ao menos um critério aos caracteres
    senha = [random.choice(caracteres[criterio]) for criterio in criterios]

    # Adicionar mais caracteres de forma aleatória
    senha += [random.choice(caracteres_possiveis) for _ in range(comprimento - len(senha))]

    # Embaralhando a senha, para ser mais aleatório
    random.shuffle(senha)

    # Retornando a senha com um string
    return "".join(senha)

def salvar_senha(senhas:list, nome_do_arquivo="minhas_senhas.txt")->None:
    with open(nome_do_arquivo, 'a') as arquivo:
        for senha in senhas:
            arquivo.write(senha + '\n')
    print("Senha salva com sucesso!")

def main():
    print("=====Gerador de Senhas Pro=====")

    caracteres = {
        "maiúsculas": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "minúsculas": "abcdefghijklmnopqrstuvwxyz",
        "números": "1234567890",
        "especiais": "!@#$^/*()_+-[]{}|;:,.<>?"
    }

    while True:
        try:
            comprimento = int(input("Informe o comprimento da senha (minimo 6): "))

            if comprimento < 6:
                print("O comprimento deve ser no mínimo 6. Tente Novamente!")
            else:
                break
        
        except ValueError:
            print("Por favor, insira um número válido!")
    
    print("Selecione os critérios.")

    criterios = []

    if input("Incluir letras maiúsculas? (s/n): ").lower().strip() == 's':
        criterios.append('maiúsculas')
    if input("Incluir letras minúsculas? (s/n): ").lower().strip() == 's':
        criterios.append('minúsculas')
    if input("Incluir números? (s/n): ").lower().strip() == 's':
        criterios.append('números')
    if input("Incluir caracteres especiais(!@#$)? (s/n): ").lower().strip() == 's':
        criterios.append('especiais')

    while True:
        try:
            quantidade = int(input("Quantas senhas quer gerar?: "))

            if quantidade <= 0:
                print("A quantidade deve ser maior do que 0.")
            else:
                break
        except ValueError:
            print("Por favor, insira um número válido!")

    senhas = []
    for _ in range(quantidade):
        senha = gerar_senhas(caracteres, comprimento, criterios)
        if isinstance(senha, str):
            senhas.append(senha)
        else:
            print("Erro ao gerar a senha!")

    print("Senhas geradas:")
    for i, senha in enumerate(senhas, start=1):
        print(f"{i} - {senha}")

    if input("Quer salvar as senhas? (s/n): ").strip().lower() == "s":
        salvar_senha(senhas)

if __name__ == "__main__":
    main()
