import random
from datetime import datetime

def gerar_senhas(caracteres: dict, comprimento: int, criterios: list) -> str:
    # Verificando se foi selecionado algum critério
    if not criterios:
        return "Selecione ao menos um critério."
    
    # Verificando se o comprimento é suficiente para os critérios
    if comprimento < len(criterios):
        return f"Comprimento muito pequeno para {len(criterios)} critérios."
    
    # Montando o conjunto de caracteres válidos
    caracteres_possiveis = ""
    for criterio in criterios:
        caracteres_possiveis += caracteres[criterio]
    
    # Garantir ao menos um caractere de cada critério selecionado
    senha = [random.choice(caracteres[criterio]) for criterio in criterios]
    
    # Adicionar mais caracteres de forma aleatória
    senha += [random.choice(caracteres_possiveis) for _ in range(comprimento - len(senha))]
    
    # Embaralhando a senha para ser mais aleatória
    random.shuffle(senha)
    
    # Retornando a senha como string
    return "".join(senha)

def salvar_senha(senhas: list, nome_do_arquivo="minhas_senhas.txt") -> None:
    try:
        # Criando cabeçalho com data/hora
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        with open(nome_do_arquivo, 'a', encoding='utf-8') as arquivo:
            arquivo.write(f"\n--- Senhas geradas em {timestamp} ---\n")
            for i, senha in enumerate(senhas, 1):
                arquivo.write(f"{i}. {senha}\n")
            arquivo.write("-" * 40 + "\n")
        
        print(f"✓ {len(senhas)} senha(s) salva(s) em '{nome_do_arquivo}'!")
        
    except Exception as e:
        print(f"Erro ao salvar arquivo: {e}")

def obter_criterios() -> list:
    """Coleta os critérios do usuário de forma mais limpa"""
    print("\nSelecione os critérios:")
    criterios = []
    
    opcoes = [
        ("maiúsculas", "Incluir letras maiúsculas (A-Z)"),
        ("minúsculas", "Incluir letras minúsculas (a-z)"),
        ("números", "Incluir números (0-9)"),
        ("especiais", "Incluir caracteres especiais (!@#$)")
    ]
    
    for criterio, descricao in opcoes:
        resposta = input(f"{descricao}? (s/n): ").lower().strip()
        if resposta == 's':
            criterios.append(criterio)
    
    return criterios

def main():
    print("=" * 35)
    print("    🔐 GERADOR DE SENHAS PRO 🔐")
    print("=" * 35)
    
    caracteres = {
        "maiúsculas": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "minúsculas": "abcdefghijklmnopqrstuvwxyz",
        "números": "0123456789",
        "especiais": "!@#$%^&*()_+-=[]{}|;:,.<>?"
    }
    
    # Obter comprimento da senha
    while True:
        try:
            comprimento = int(input("\nInforme o comprimento da senha (mínimo 4): "))
            
            if comprimento < 4:
                print("⚠️  O comprimento deve ser no mínimo 4. Tente novamente!")
            else:
                break
                
        except ValueError:
            print("⚠️  Por favor, insira um número válido!")
    
    # Obter critérios
    criterios = obter_criterios()
    
    if not criterios:
        print("⚠️  Você deve selecionar pelo menos um critério!")
        return
    
    # Obter quantidade de senhas
    while True:
        try:
            quantidade = int(input("\nQuantas senhas deseja gerar? "))
            
            if quantidade <= 0:
                print("⚠️  A quantidade deve ser maior que 0.")
            elif quantidade > 50:
                print("⚠️  Máximo de 50 senhas por vez.")
            else:
                break
        except ValueError:
            print("⚠️  Por favor, insira um número válido!")
    
    # Gerar senhas
    print(f"\n🔄 Gerando {quantidade} senha(s)...\n")
    senhas = []
    
    for _ in range(quantidade):
        senha = gerar_senhas(caracteres, comprimento, criterios)
        if "Selecione" not in senha and "Comprimento" not in senha:
            senhas.append(senha)
        else:
            print(f"⚠️  {senha}")
            return
    
    # Exibir senhas geradas
    print("✅ Senhas geradas:")
    print("-" * 30)
    for i, senha in enumerate(senhas, 1):
        print(f"{i:2d}. {senha}")
    print("-" * 30)
    
    # Opção para salvar
    if input("\n💾 Deseja salvar as senhas em arquivo? (s/n): ").strip().lower() == "s":
        salvar_senha(senhas)
    
    print("\n👋 Obrigado por usar o Gerador de Senhas Pro!")

if __name__ == "__main__":
    main()