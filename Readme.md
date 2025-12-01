📘 README — Sistema de Coleta PROESP-Br (Interface WEB)
🏋️‍♂️ Sobre o Projeto

Este projeto é uma interface web em alta fidelidade que simula a coleta de dados da avaliação física do Manual PROESP-Br.
O desenvolvimento foi orientado pelos princípios da IHM (Interação Humano-Computador), com foco em:

Eficiência na navegação

Prevenção de erros

Feedback imediato

Acessibilidade

Organização visual por Gestalt

🚀 Tecnologias Utilizadas

HTML5 (semântico)

CSS3 (puro)

JavaScript (sem frameworks)

Organização em 3 páginas independentes

🧠 Aplicação das Leis de IHM
✔ Lei de Fitts

Os elementos clicáveis foram projetados com:

Botões grandes com ampla área útil

Inputs com altura aumentada

Labels grandes e próximas dos campos

Resultado:
Redução do tempo de movimento e maior precisão ao clicar.

✔ Lei de Hick-Hyman

A coleta foi dividida em 3 etapas, reduzindo o número de escolhas simultâneas:

Identificação e Triagem

Antropometria

Testes Motores

Resultado:
Redução do tempo de decisão e navegação mais eficiente.

✔ Feedback (Shneiderman)

A interface apresenta feedback em três níveis:

1. Feedback de digitação por campo

Mensagens vermelhas de erro abaixo dos inputs

Campos destacados ao erro

2. Feedback global

Caixa de mensagem exibindo erros gerais (“Corrija os erros antes de continuar”)

3. Feedback de conclusão

Alerta “Avaliação concluída!”

Resultado:
Usuário sabe sempre o que está acontecendo e o que deve corrigir.

✔ Prevenção de Erros

Aplicada via JavaScript com validações de:

Faixas numéricas corretas

Campos obrigatórios

Tipos adequados

Comprimento mínimo de texto

Exemplos:

Idade entre 5 e 120

Peso entre 10 kg e 300 kg

Handgrip entre 0 e 200 kg

Campos obrigatórios não permitem continuar

Resultado:
O sistema evita erros antes da submissão.

✔ Princípios da Gestalt

Os formulários foram organizados visualmente usando:

Proximidade

Campos relacionados aparecem próximos dentro de fieldsets.

Similaridade

Uso de cores e tamanhos consistentes para elementos parecidos.

Agrupamento temático

Testes de força estão em um card separado.

Testes de velocidade e agilidade estão em outro.

Resultado:
O usuário entende rapidamente a estrutura dos dados.

✔ Acessibilidade

Navegação total via teclado (Tab)

Contraste adequado (fundo azul escuro, textos pretos e brancos)

Labels conectados aos inputs por for=""

Layout limpo e sem elementos confusos

🧩 Estrutura do Projeto
📁 PROESP-Coleta
├── index.html
├── antropometria.html
├── testesmotores.html
├── estilodapagina.css
└── programacao.js

📄 Fluxo da Aplicação

index.html

Nome, idade e triagem

Botão → próximo formulário

antropometria.html

Altura, peso, envergadura

Botão → próximo formulário

testesmotores.html

Testes de força, velocidade e agilidade

Botão “Finalizar” → alerta de conclusão

🧪 Como Executar Localmente

Baixe ou clone o repositório:

git clone https://github.com/SEU-USUARIO/Proesp-coleta.git


Abra a pasta no VS Code

Clique duas vezes no arquivo index.html para iniciar o fluxo.

Não é necessário servidor. O projeto funciona 100% localmente.

📚 Objetivo Acadêmico

Este projeto atende exatamente aos requisitos:

Aplicação prática das Leis de IHM

Alta fidelidade visual e funcional

HTML, CSS e JS puros

Fluxo com 3 etapas lógicas

🤝 Autor

Projeto desenvolvido por Davi de Souza Ferreira Miranda para a disciplina de Interface do Usuário.

