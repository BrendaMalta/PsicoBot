# 💖 Visão Geral do Projeto PsicoBot

## 🌟 Objetivo
Criar um mascote virtual empático e acolhedor, que ajuda pessoas a lidarem com suas emoções através de sugestões práticas de autocuidado. O PsicoBot mistura sentimentos, tecnologia e carinho para oferecer um espaço seguro e interativo, enquanto serve como ferramenta de aprendizado em programação.

---

## 🎯 Funcionalidades principais

- O usuário informa como está se sentindo (ex: tristeza, ansiedade, raiva).
- O PsicoBot responde com uma fala empática e uma sugestão prática de autocuidado:
  - “Dar uma volta no quarteirão”
  - “Pintar um livro de colorir”
  - “Respirar fundo por 1 minuto”
- Interface visual fofa, com carinha de tamagotchi/mascote.
- Possibilidade de evoluir o mascote conforme o usuário cuida de si.
- Registro de um pequeno histórico emocional, para consultas futuras.

---

## 🖥️ Frontend (visual + emocional)

- Um bichinho virtual com expressões (feliz, preocupado, curioso).
- Campo: “Como você está se sentindo agora?”
- Botões:
  - “Quero outra sugestão”
  - “Não quero fazer nada”
  - “Só quero companhia”
- Mensagens com tom acolhedor e carinhoso.

---

## 🔧 Backend (NestJs + banco de dados)

- Recebe o sentimento informado pelo usuário.
- Busca sugestões no dicionário emocional.
- Salva no histórico emocional.
- Pode gerar frases com base na recorrência de sentimentos, como:
  > "Você me contou que tem se sentido triste várias vezes nessa semana. Que tal tentarmos algo novo hoje?"

---

## 🎁 Recursos extras (versões futuras)

- **Barra de autocuidado**: enche conforme o usuário realiza autocuidados sugeridos.
- **Itens de recompensa**: adesivos virtuais fofos (colagem interativa).
- **Mini diários**: o mascote pergunta como foi o dia/noite de forma leve e acolhedora.
- **Modo offline**: materiais imprimíveis com sugestões físicas para situações sem acesso ao PsicoBot (kit emocional analógico 💌).

---

## ✨ Futuro do PsicoBot
Com o tempo, o projeto poderá incorporar:
- Backend em NestJs
- Frontend em Angular
- Banco de dados com PostgreSQL
- Interface web interativa e responsiva
- Versão mobile 
