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
