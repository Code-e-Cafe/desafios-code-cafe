# 🔐 Gerador de Senhas Pro

## 📝 Descrição do Desafio

Desenvolver um gerador de senhas seguras que permita ao usuário personalizar os critérios de geração, incluindo comprimento, tipos de caracteres e quantidade de senhas a serem geradas.

## ✨ Funcionalidades Implementadas

- ✅ **Geração de senhas personalizáveis**
  - Definir comprimento da senha (mínimo 4 caracteres)
  - Escolher tipos de caracteres: maiúsculas, minúsculas, números e especiais
  - Gerar múltiplas senhas de uma só vez (até 50)

- ✅ **Garantia de critérios**
  - Pelo menos um caractere de cada tipo selecionado
  - Validação de comprimento versus critérios escolhidos

- ✅ **Salvamento em arquivo**
  - Opção de salvar senhas em arquivo `.txt`
  - Timestamp automático para organização
  - Numeração das senhas geradas

- ✅ **Interface amigável**
  - Mensagens claras e organizadas
  - Emojis para melhor experiência visual
  - Validações de entrada robustas

## 🚀 Como Executar

### Pré-requisitos

- Python 3.6 ou superior

### Execução

```bash
python gerador_senhas.py
```

## 📋 Como Usar

1. **Execute o programa**
2. **Defina o comprimento** da senha (mínimo 4 caracteres)
3. **Selecione os critérios** desejados:
   - Letras maiúsculas (A-Z)
   - Letras minúsculas (a-z)
   - Números (0-9)
   - Caracteres especiais (!@#$%^&*)
4. **Informe quantas senhas** deseja gerar (máximo 50)
5. **Visualize as senhas** geradas
6. **Opcionalmente salve** em arquivo

### Exemplo de Uso

```
=====================================
    🔐 GERADOR DE SENHAS PRO 🔐
=====================================

Informe o comprimento da senha (mínimo 4): 12

Selecione os critérios:
Incluir letras maiúsculas (A-Z)? (s/n): s
Incluir letras minúsculas (a-z)? (s/n): s
Incluir números (0-9)? (s/n): s
Incluir caracteres especiais (!@#$)? (s/n): n

Quantas senhas deseja gerar? 3

🔄 Gerando 3 senha(s)...

✅ Senhas geradas:
------------------------------
 1. Kb8mNp2qWxR5
 2. Zt4vGh9cYe1L
 3. Mj6nBd3fPs7Q
------------------------------

💾 Deseja salvar as senhas em arquivo? (s/n): s
✓ 3 senha(s) salva(s) em 'minhas_senhas.txt'!

👋 Obrigado por usar o Gerador de Senhas Pro!
```

## 🛡️ Características de Segurança

- **Aleatoriedade**: Uso do módulo `random` do Python
- **Critérios garantidos**: Pelo menos um caractere de cada tipo selecionado
- **Embaralhamento**: Posições dos caracteres são embaralhadas
- **Validações**: Múltiplas verificações de entrada

## 📁 Estrutura do Projeto

```
Emicy963 - Gerador de Senhas/
├── password_maker.py      # Código principal
├── README.md              # Este arquivo
└── .gitignore             # Arquivos ignorados pelo Git
```

## 🔧 Melhorias Implementadas

- **Validação robusta de entrada** com tratamento de erros
- **Interface visual melhorada** com emojis e formatação
- **Timestamp nas senhas salvas** para melhor organização
- **Limite de senhas por execução** para evitar sobrecarga
- **Encoding UTF-8** para suporte a caracteres especiais
- **Função modular** para coleta de critérios

## 🧪 Exemplo de Arquivo Gerado

```
--- Senhas geradas em 2025-06-06 14:30:25 ---
1. Kb8mNp2qWxR5
2. Zt4vGh9cYe1L
3. Mj6nBd3fPs7Q
----------------------------------------
```

## 💡 Possíveis Melhorias Futuras

- Integração com gerenciadores de senhas
- Interface gráfica (GUI)
- Análise de força da senha gerada
- Opções de exportação (CSV, JSON)
- Criptografia das senhas salvas

## 🤝 Contribuição

Este projeto faz parte dos desafios da comunidade **Code & Café**. 

**Discord**: [Code & Café](https://discord.com/invite/2SQVTdjmEW)

---

**Desenvolvido com ☕ e muito código!**
