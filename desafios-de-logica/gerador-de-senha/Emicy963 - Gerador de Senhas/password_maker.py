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
