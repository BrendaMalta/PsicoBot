# Planejamento - Projeto PsicoBot

## Objetivo
Criar um mascote virtual que ajuda a lidar com emoções através de sugestões práticas de autocuidado. O projeto será desenvolvido com o backend usando NestJS e o frontend com Angular, mantendo a escalabilidade e modularidade.

## Fase 1 - Backend com NestJS e Frontend com Angular

### Objetivos
- Receber do usuário uma emoção selecionada (ex: tristeza, raiva, ansiedade).
- Retornar uma sugestão de autocuidado de forma empática.
- Organizar o código de forma modular com DTOs, controllers, services e interfaces.
- Implementar e testar as funcionalidades do backend.
- Começar a planejar a interface e os recursos visuais do frontend.

### Estrutura inicial
- **backend/**
  - `src/`
    - `emotions/`: módulo para manipular as emoções.
    - `suggestions/`: módulo para as sugestões de autocuidado.
    - `main.ts`: ponto de entrada do aplicativo NestJS.
  - `docs/`
    - `planning.md`: planejamento atualizado.
    - `user_guide.md`: guia futuro para uso.
  - `tests/`
    - `emotions/`: testes relacionados ao módulo de emoções.
    - `suggestions/`: testes para o módulo de sugestões.

### Próximos passos
1. **Backend**:
   - Finalizar a integração do backend com o banco de dados (ou simulação de dados).
   - Criar endpoints para capturar as emoções do usuário e sugerir atividades de autocuidado.
   - Testar as funcionalidades de criação e consulta de sugestões.
   
2. **Frontend**:
   - Definir o design inicial da interface, incluindo a aparência do robô.
   - Criar o primeiro esboço da interação do usuário, com a seleção de emoções e a apresentação de sugestões de autocuidado.

3. **Considerações futuras**:
   - Avaliar a implementação de um sistema de login e histórico do usuário, caso necessário.
   - Explorar a possibilidade de integrar o frontend com o backend de forma fluida.
   - Estabelecer uma base para escalar a aplicação, conforme novos requisitos forem surgindo.
