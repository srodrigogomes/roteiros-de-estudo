# Roteiros de Estudo

Aplicação web desenvolvida com Next.js e React para organizar roteiros de estudo destinados a estudantes do 6º ao 9º ano do Ensino Fundamental.

## Funcionalidades

- Listagem de roteiros com dados armazenados em arquivos JSON.
- Filtros por disciplina e ano escolar.
- Página individual de cada roteiro.
- Tratamento de identificadores de roteiros inexistentes.
- Questões e conteúdos de apoio.
- Aviso sobre o uso de inteligência artificial.
- Consulta de textos de apoio pela API pública da Wikipédia, com estados de carregamento, sucesso e erro.
- Formulário para solicitar novos roteiros.

## Tecnologias

- Next.js com App Router
- React e JavaScript
- HTML e CSS
- Arquivos JSON
- API pública da Wikipédia

## Como executar

1. Instale o Node.js.
2. Clone ou baixe este repositório.
3. Abra o terminal na pasta do projeto.
4. Instale as dependências com `npm install`.
5. Inicie a aplicação com `npm run dev`.
6. Acesse http://localhost:3000.

## Gerar a versão estática

Execute `npm run build`. Os arquivos da versão estática são gerados na pasta `out`.

## Estrutura do projeto

- `app/`: páginas e rotas da aplicação.
- `components/`: componentes reutilizáveis.
- `data/`: dados dos roteiros em arquivos JSON.

## Observação

Projeto desenvolvido individualmente como atividade acadêmica. A documentação final deve refletir as funcionalidades implementadas e os testes efetivamente realizados.

**Status:** em validação final.