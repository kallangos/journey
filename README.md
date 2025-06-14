### 🚀 Journey [BackEND]

> [!NOTE]
> ##### 📋 Pré-requisitos: Node, React, Prisma, TypeScript, Fastify.<br>
> ##### Extensões: Eslint, Prisma.

> ##### **🛠️ Pasta : [../BackEnd].**
>     npm init -y
>     npm i typescript @types/node -D
>     npx tsc --init

> ##### Crie o arquivo : [../src/server.ts].
> **🛠️ Edite: [./package.json]** adicionando o script de execução.<br> o parâmetro "watch" faz com que ele recompile o server sempre que ele salvo com alterações. Isso também manterá a aplicação rodando indefinidamente. [npm run server]
>     
>     "server": "tsx watch src/server.ts"

>
>Acessar a pagina [TypeScript Config Bases](https://github.com/tsconfig/bases) para tornar TypeScript compatível com sua versão de node.<br>
>Desça a pagina ate encontrar a sua versão compativel, na coluna [Package] clique no correspondente a versão de nodeJS do projeto [ex: v22.16.0].<br><br>
>Esta informação ira Substituir o conteudo do arquivo [tsconfig.json].
>
> ##### **🛠️ Edite: [./tsconfig.json].**
>     {
>       "$schema": "https://json.schemastore.org/tsconfig",
>       "_version": "22.0.0",
>       "compilerOptions": {
>       "lib": ["es2024", "ESNext.Array", "ESNext.Collection", "ESNext.Iterator"],
>       "module": "nodenext",
>       "target": "es2022",
>       "strict": true,
>       "esModuleInterop": true,
>       "skipLibCheck": true,
>       "moduleResolution": "node16"
>       }
>     }

> ##### Node nao entende Typescript, esse comando permite a transpilação do typescript para javascript {instalado como dep. de desenvolvimento}.
>     npm i tsx -D

> ##### Instala o framework [Fastify](https://fastify.dev/docs/latest/Guides/Getting-Started/) que será utilizado no backend.
>     npm i fastify

> ##### Instala o Prisma como dependência de desenvolvimento, para trabalharmos com banco de dados, responsável também pela automatização de manutenções no banco, criação de tabelas/colunas, deforma indireta no banco e tb para escrita de query's no banco.
>     npm i prisma -D

> ##### **🛠️ Edite:   [settings.json]**
> ##### Forçar organizaçao do codigo pelo Eslint e arquvios .prisma pelo formatador do Prisma.
>     - Eslint:
>       "editor.codeActionsOnSave": {
>         "source.fixAll.eslint": "explicit"
>       },
>     - Prisma:
>       "[prisma]": {
>       "editor.defaultFormatter": "Prisma.prisma",
>       "editor.formatOnSave": true
>       },


> ##### Inicia o Prisma definindo qual banco de dados será utilizado no projeto. Este projeto esta utilizando o MySQL.
> As opções são: **prisma+postgres, sqlite, postgresql, mysql, sqlserver, mongodb e cockroachdb.**
>
>     npm prisma init --datasource-provider mysql
      
*ReadME - Update*