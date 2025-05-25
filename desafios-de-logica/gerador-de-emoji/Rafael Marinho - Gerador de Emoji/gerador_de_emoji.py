import random as rd

def emoji_generator():
    """
    Função que gera um emoji aleatório.
    """
    # Lista de emojis
    emojis = [
        "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
        "😋", "😎", "😍", "😘", "😗", "😙", "😚", "🙂", "🤗", "🤩",
        "🤔", "🤨", "😐", "😑", "😶", "🙄", "😏", "😒", "😬", "😮",
        # Adicione mais emojis conforme necessário
    ]
    
    # Seleciona um emoji aleatório
    selected_emoji = rd.choice(emojis)
    
    return selected_emoji

def main():
    """
    Função principal que executa o gerador de emojis.
    """
    print("Gerador de Emojis")
    print("------------------")
    
    # Gera e exibe um emoji aleatório
    emoji = emoji_generator()
    print(f"Emoji gerado: {emoji}")

if __name__ == "__main__":
    main()