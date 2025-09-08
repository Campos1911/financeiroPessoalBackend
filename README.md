# Financeiro Pessoal - Backend

Backend em **TypeScript** para gerenciamento de finanças pessoais (receitas, despesas, categorias e relatórios).  
Este repositório contém a API, modelos Prisma e scripts de desenvolvimento.

---

## Conteúdo

- `src/` — código-fonte TypeScript (controllers, services, routes, middlewares, etc.)
- `prisma/` — schema Prisma e arquivos de migração
- `package.json` — scripts e dependências
- `tsconfig.json` — config TypeScript

---

## Tecnologias (prováveis — confirmar no `package.json`)

- Node.js + TypeScript  
- Prisma ORM  
- Banco de dados: `MySQL` (configurar via `DATABASE_URL`)  
- Autenticação: JWT
- Gerenciador de pacotes: Yarn ou npm

---

## Pré-requisitos

- Node.js
- Yarn (recomendado) ou npm  
- Banco de dados configurado - MySQL (URL em `.env`)

---

## Instalação (local)

```bash
# Clonar o repositório
git clone https://github.com/Campos1911/financeiroPessoalBackend.git
cd financeiroPessoalBackend

# Instalar dependências
yarn install
# ou
# npm install

# rodar o prisma para configurar o banco
npx prisma migrate dev
npx prisma generate
