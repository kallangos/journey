## 🚀 Journey [BackEND]

> [!NOTE]
> 📋 Pré-requisitos: Node, React, Prisma, TypeScript, Fastify

> ### Extensões: [ Eslint, Prisma ]

> ### **🛠️ Pasta : [ ../BackEnd ]**
>npm init -y
>npm i typescript @types/node -D
>npx tsc --init

> ### Acessar o "https://github.com/tsconfig/bases"
><p>Dessa a pagina ate encontrar a sua versão do node: </p>
>     Ex: $node -v
>     v22.16.0
><p>Na coluna [Package] clique no que corresponde a versão de NODE [ex: v22.16.0].</p>
>     |    Node 22    |    @tsconfig/node22    |
>
> ### **🛠️ Edite:   [tsconfig.json]**
>{
>     "$schema": "https://json.schemastore.org/tsconfig",
>     "_version": "22.0.0",
>     "compilerOptions": {
>       "lib": ["es2024", "ESNext.Array", "ESNext.Collection", "ESNext.Iterator"],
>       "module": "nodenext",
>       "target": "es2022",
>   
>       "strict": true,
>       "esModuleInterop": true,
>       "skipLibCheck": true,
>       "moduleResolution": "node16"
>     }
>}

> ### **🛠️ Edite:   [settings.json]**
><p>Forçar organizaçao do codigo pelo Eslint e arquvios .prisma pelo formatador do Prisma.</p>
>   
>- Eslint:
>  "editor.codeActionsOnSave": {
>    "source.fixAll.eslint": "explicit"
>  },
>- Prisma:
>  "[prisma]": {
>  "editor.defaultFormatter": "Prisma.prisma",
>  "editor.formatOnSave": true
>  },
>   

> ### Node nao entende Typescript, esse comando permite a transpilação do typescript para javascript {instalado como dep. de desenvolvimento}.
>
>
>     npm i tsx -D

      
      $ npm i fastify
      Instala o framework fastify para usar o nosso backend.
      https://fastify.dev/docs/latest/Guides/Getting-Started/

      $ npm i prisma -D
      Instala o Prisma como dependencia de desenvolvimento, para trabalharmos 
      com banco de dados, responsavel tambem pela automatizacao de manutencoes 
      no banco, criação de tabelas/colunas, deforma indireta no banco e tb para 
      escrita de query`s no banco.
      
      $ npm prisma init --datasource-provider 
      
      "dev" : "tsx watch src/server.ts"
      Editar o package.json do projeto adicionando a seguinte linha na sessao 
      de scripts. Esta linha define um script nome de "dev", o parametro "watch" 
      faz com que ele recompile o server sempre que ele salvo com alterações. Isso tambem mantera 
      a aplicação rodando indefinidamente.

      $ npm run dev
      Para rodar o server/app/node, basta digitar.

ReadME - Update