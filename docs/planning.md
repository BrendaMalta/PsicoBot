# Planejamento - Projeto PsicoBot

## Objetivo
Criar um mascote virtual que ajuda a lidar com emoções através de sugestões práticas de autocuidado. O projeto será desenvolvido com base nos conhecimentos que estou adquirindo em Python, com possibilidade de expansão futura usando Django e Angular.

## Fase 1 - CLI básica (Interface de Linha de Comando)

### Objetivos
- Receber do usuário uma emoção digitada (ex: tristeza, raiva, ansiedade).
- Retornar uma sugestão de autocuidado de forma empática.
- Manter o código organizado e modularizado.
- Iniciar testes básicos com `pytest`.

### Estrutura inicial
- `psicobot/`
  - `main.py`: ponto de entrada
  - `emotions.py`: lógica para detectar emoções
  - `suggestions.py`: sugestões de autocuidado
- `docs/`
  - `planning.md`: este planejamento
  - `user_guide.md`: guia futuro para uso
- `tests/`
  - `test_emotions.py`: onde testes serão criados

### Próximos passos
1. Esboçar funções principais no `main.py`.
2. Criar função para identificar emoção em `emotions.py`.
3. Criar dicionário de sugestões no `suggestions.py`.
4. Montar a primeira interação completa do bot.
